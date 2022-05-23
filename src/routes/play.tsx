import { FormEvent, useEffect, useMemo, useState } from 'react'
import randomWords from 'random-words'
import axios from 'axios'
import { useScore } from '../store'

type Question = {
  question: string
  answer: string
}

const getRandomPlaceholder = (keyword: string) => {
  const length = keyword.length
  const placeholderArray = new Array(length).fill('.')

  const randomIndexes = new Array(Math.floor(length / 3))
    .fill(0)
    .map(() => Math.floor(Math.random() * length))

  randomIndexes.forEach((index) => {
    placeholderArray[index] = keyword[index]
  })

  return placeholderArray.join('')
}

const fetchQuestion = async () => {
  let keyword = randomWords()
  while (keyword.length < 3) {
    keyword = randomWords()
  }

  let question

  while (!question) {
    const response = await axios.get(
      `https://dictionaryapi.com/api/v3/references/learners/json/${keyword}?key=5fb2f5a8-32bc-4bf2-8ecf-dacf90d1814b`
    )
    question = response.data[0].shortdef[0]
  }

  return {
    question,
    answer: keyword,
  }
}

export default function PlayRoute() {
  const [currentQuestion, setCurrentQuestion] = useState<Question>()
  const [solved, setSolved] = useState(false)
  const [value, setValue] = useState('')
  const setScore = useScore((state: any) => state.updateScore)

  const placeholder = useMemo(
    () =>
      getRandomPlaceholder(currentQuestion?.answer || ('' as string)),
    [currentQuestion]
  )

  useEffect(() => {
    if (value === currentQuestion?.answer) {
      setSolved(true)
      setScore(1)
    } else {
      setSolved(false)
    }
  }, [value])

  useEffect(() => {
    fetchQuestion().then((question) => {
      setCurrentQuestion(question)
      setValue('')
    })
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    fetchQuestion().then((question) => {
      setSolved(false)
      setCurrentQuestion(question)
      setValue('')
    })
  }

  const revealAnswer = () => {
    setValue((currentQuestion as any).answer)
    setScore(-2)
  }

  return !currentQuestion ? null : (
    <form className='my-12' onSubmit={handleSubmit}>
      <div className='bg-white p-4 sm:p-8 rounded-3xl shadow-lg shadow-gray-100 border min-h-[50vh] grid justify-center items-center text-gray-900'>
        <div className='text-2xl md:text-3xl text-center font-medium max-w-2xl mt-9 mb-16'>
          {currentQuestion.question}
        </div>
        <div className='flex justify-center mb-10'>
          <input
            type='text'
            className={`rounded-2xl tracking-[1rem] outline-none px-6 py-3 text-2xl font-medium text-center w-full max-w-sm ${
              solved
                ? 'bg-violet-500 text-white'
                : 'border-2 bg-gray-100'
            }`}
            id='answer-input'
            // @ts-ignore
            spellcheck='false'
            onChange={(e) => {
              setValue(e.target.value)
            }}
            readOnly={solved}
            placeholder={placeholder}
            value={value}
            autoFocus
          />
        </div>
      </div>
      <div className='flex items-center justify-between py-4'>
        {solved ? (
          <div />
        ) : (
          <button
            type='button'
            onClick={revealAnswer}
            className='rounded-full px-8 py-3 bg-gray-200 hover:bg-gray-300 transition font-medium'>
            Reveal (-1⭐)
          </button>
        )}

        <button
          type='submit'
          className='rounded-full px-8 py-3 bg-yellow-400 hover:bg-yellow-500 transition font-medium'>
          {solved ? 'Next' : 'Skip'}
        </button>
      </div>
    </form>
  )
}

import React from 'react'

const SectionBlog:React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
        <span className='text-3xl font-semibold'>AI-Assisted Development</span>
        <div className='flex flex-col text-slate-600 text-xl gap-5'>
            <p>Artificial intelligence is revolutionizing how developers write code. Tools like GitHub Copilot and similar AI assistants are becoming increasingly sophisticated, capable of understanding context and generating complex code snippets based on natural language descriptions.</p>

            <p>By 2025, we expect these tools to become even more integrated into the development workflow, potentially handling routine tasks entirely and allowing developers to focus on higher-level architecture and business logic.</p>

        </div>
    </div>
  )
}

export default SectionBlog

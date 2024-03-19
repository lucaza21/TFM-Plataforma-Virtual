import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AltaCurso from '../components/routes/AltaCurso';
import Footer from '../components/footer';


describe('App', () =>{
  it('renderizar el componente AltaCurso', ()=>{
    render(<AltaCurso />)
    screen.debug();
  })

})

describe('App', () =>{
  it('renderizar el componente Footer', ()=>{
    render(<Footer/>)
    screen.debug();
  })

})
// describe('A truthy statement', () => {
//   it('should be equal to 2', () => {
//     expect(1+1).toEqual(2)
//   })
// })


import styled from "styled-components"

export const Styles = styled.div`
  width: 100%;
  margin: 1rem;
  display: flex;
  align-items: center;
  max-width: 700px;
  margin: 0 auto;
  .search__container {
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #f2f2f2;
    border-radius: 2rem;
    padding: 0.7rem;
  }
  input {
    background: none;
    outline: none;
    border: none;
    box-shadow: none;
    width: 100%;
    height: 100%;
    margin-left: 1rem;
    font-size: 1rem;
  }
  .search__btn {
    background-color: #0000ff;
    color: #f2f2f2;
    border-radius: 5px;
    padding: 0.9rem 3rem;
    outline: none;
    border: none;
    border-radius: 2rem;
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    &:hover {
      background-color: rgb(132, 132, 216);
    }
  }
`

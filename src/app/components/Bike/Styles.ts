import styled from "styled-components"

export default styled.div`
  .bike {
    display: flex;
    align-items: center;
    margin: 2rem 0;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    padding: 1rem;
    border-radius: 1rem;
    @media (max-width: 700px) {
      flex-direction: column;
    }
  }
  .thumb__image {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 1rem;
    margin-right: 2rem;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 700px) {
      margin-right: 0;
      width: 100%;
    }
  }
  .bike__content__container {
    display: flex;
    justify-content: space-between;
    align-self: flex-start;
    width: 100%;
    padding: 2rem 1rem 1rem 0;

    @media (max-width: 700px) {
      flex-direction: column;
      padding: 1rem;
    }

    .date {
      font-size: 0.9rem;
      color: #777;
      display: flex;
      align-items: center;
    }

    .location {
      display: flex;
      align-items: center;
      font-size: 1rem;
      font-weight: 600;
      align-self: flex-start;
    }

    .desc {
      font-size: 14px;
      margin-top: 1rem;
    }
  }
`

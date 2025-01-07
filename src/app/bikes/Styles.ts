import styled from "styled-components"

export const Styles = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .bikes__container {
    width: 100%;
  }
  .total__container {
    display: flex;
    align-items: center;
    h4 {
      font-size: 1rem;
      margin-top: 1rem;
    }
  }
  .details__container {
    width: 100%;
  }
  .card__container {
    margin-bottom: 1rem;
  }
  .card__header {
    background-color: rgb(183, 0, 255);
    color: #fff;
    text-align: center;
    padding: 0.5rem;
  }
  .card__content {
    padding: 1rem;
  }
  .Badge {
    width: max-content;
    padding: 4px;
    border-radius: 10px;
    text-align: center;
    margin-top: 1rem;
    background-color: rgb(183, 0, 255);
  }
  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
width: 100%;
max-width: 580px;
margin: 0 auto;
padding: 0 30px;

background: #fff;
border: 1px solid #ddd;
margin-top: 30px;

button {
  margin-top:20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 0;
  background: #000000;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
}
`

export const Clients = styled.div`
  ul li {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }

  ul {
    font-weight: bold;
  }
`

export const Form = styled.form`
  width: 100%;
  max-width: 580px;
  margin: 30px auto 0;
  padding: 30px;
  background: #fff;
  border: 1px solid #ddd;

  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 10px;
  }

  input[type=text] {
    height: 38px;
    border-radius: 4px;
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 14px;
  }
`


import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'

export const Input = styled.input({
  border: 'none',
  borderRadius: '4px',
  padding: '10px',
  backgroundColor: '#e3e8ed',
})

export const FormGroup = styled.div({
  display: 'flex',
  flexDirection: 'column',
})

const ButtonVariants = {
  'primary' : {
    backgroundColor: 'rgb(63, 81, 181)',
    color: 'white',
  }, 
  'secondary' : {
    backgroundColor: 'rgb(241, 242, 247)',
    color: '#434449',
  }
}

export const Button = styled.button({
  border: 'none',
  padding: '8px 12px',
  borderRadius: '4px',
  fontSize: '1rem',
  ':hover': {
    cursor: 'pointer',
  }
  }, ({ variant = 'primary' }) => ButtonVariants[variant]
)

export const CircleButton = styled.button({
  borderRadius: '30px',
  padding: '0',
  width: '40px',
  height: '40px',
  lineHeight: '1',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
  color: '#434449',
  border: `1px solid #f1f1f4`,
  cursor: 'pointer',
})

export const Dialog = styled(ReachDialog)({
  maxWidth: '450px',
  borderRadius: '3px',
  paddingBottom: '3.5em',
  boxShadow: '0 10px 30px -5px rgba(0, 0, 0, 0.2)',
  margin: '20vh auto',
  '@media (max-width: 991px)': {
    width: '100%',
    margin: '10vh auto',
  },
})

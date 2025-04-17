import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { onLogin } from '../../redux/user/userOperations';
import {
  Button,
  TextField,
  OutlinedInput,
  FormControl,
  InputLabel,
  IconButton,
} from '@mui/material';
import Visibility from '../../assets/icons/visibility_icon.svg?react';
import VisibilityOff from '../../assets/icons/visibility_off_icon.svg?react';
import './LoginPage.scss';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(state => state.user.isLoading);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(onLogin(user));
  };

  return (
    <main className="login">
      <div className="container">
        <h1 className="login_title">Login</h1>
        <form className="login_form" onSubmit={onSubmit}>
          <TextField
            label="Email"
            variant="outlined"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
            fullWidth
            size="small"
          />

          <FormControl fullWidth size="small">
            <InputLabel>Password *</InputLabel>
            <OutlinedInput
              label="Password"
              type={showPassword ? 'text' : 'password'}
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              endAdornment={
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                  className="login_pass_btn"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              }
            />
          </FormControl>

          <Button
            variant="outlined"
            type="submit"
            fullWidth
            color="inherit"
            size="small"
            disabled={isLoading}
          >
            Login
          </Button>
        </form>
      </div>
    </main>
  );
};

export default LoginPage;

import { Button, Grid } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { isValidEMail, isValidName } from 'utils/validations';
import { CustomTextField, StyledTitle } from './styled';

interface IForm {
  name: string;
  phoneNumber: string;
  email: string;
}
const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
    },
  });

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  const formatPhoneNumber = (value: string) => {
    return (
      value
        .replace(/[^0-9]/g, '')
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
        // eslint-disable-next-line
        .replace(/(\-{1,2})$/g, '')
    );
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          item
          spacing={1}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sm={2} md={2}>
            <StyledTitle>이름</StyledTitle>
          </Grid>
          <Grid item sm={10} md={10}>
            <Controller
              name="name"
              control={control}
              rules={{
                required: '값을 입력 해주세요',
                maxLength: 20,
                validate: (value) =>
                  isValidName(value) || '한글, 영어, 공백만 입력 가능 합니다.',
              }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.name)}
                  helperText={errors.name?.message}
                />
              )}
            />
          </Grid>
          <Grid item sm={2} md={2}>
            <StyledTitle>이메일</StyledTitle>
          </Grid>
          <Grid item sm={10} md={10}>
            <Controller
              name="email"
              control={control}
              rules={{
                required: '값을 입력 해주세요',
                validate: (value) =>
                  isValidEMail(value) || '메일 주소를 확인해주세요.',
              }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.email)}
                  helperText={errors.email?.message}
                />
              )}
            />
          </Grid>
          <Grid item sm={2} md={2}>
            <StyledTitle>핸드폰번호</StyledTitle>
          </Grid>
          <Grid item sm={10} md={10}>
            <Controller
              name="phoneNumber"
              control={control}
              rules={{
                required: '값을 입력 해주세요',
                maxLength: 20,
                pattern: {
                  value: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/,
                  message: '알맞는 핸드폰 번호 형식을 입력 해주세요',
                },
              }}
              render={({ field }) => (
                <CustomTextField
                  {...field}
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={Boolean(errors.phoneNumber)}
                  helperText={errors.phoneNumber?.message}
                  type="tel"
                  inputProps={{ maxLength: 13 }}
                  onChange={(e) => {
                    const value = e.target.value.replace(/[^0-9]/g, '');
                    if (value.length >= 4)
                      field.onChange(formatPhoneNumber(value));
                    else field.onChange(value);
                  }}
                />
              )}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          버튼
        </Button>
      </form>
    </>
  );
};

export default Form;

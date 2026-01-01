import React from 'react';
import { get, useForm } from 'react-hook-form';
import S from './style';

const Join = () => {

  const { register, handleSubmit, getValues, formState: { errors, isSubmitted, isSubmitting }} = useForm({mode:"onChange"})

  const join = handleSubmit((data) => {
    // fetch
    console.log(data)
    const {memberEmail, memberPassword} = data
    // fetch("http://localhost:4000/posts", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     memberEmail: memberEmail,
    //     memberPassword: memberPassword
    //   })
    // })

    // fetch("http://localhost:4000/posts/f995", {
    //   method: "PUT",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     memberEmail: memberEmail,
    //     memberPassword: memberPassword
    //   })
    // })
    
    fetch("http://localhost:4000/posts/ad40", {
      method: "DELETE"})

  })

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
  console.log(errors)

  return (
    <div>
      <form onSubmit={join}>
        <S.Label>
          <p>이메일</p>
          <input 
            type="text" 
            placeholder='이메일을 입력하세요'
            {...register("memberEmail", {
              required: true,
              pattern: {
                value: emailRegex
              }
            })}
          />
        {errors && errors?.memberEmail?.type === "required" && (
          <S.ErrorMessage>이메일을 입력하세요.</S.ErrorMessage>
        )}
        {errors && errors?.memberEmail?.type === "pattern" && (
          <S.ErrorMessage>이메일 양식에 맞게 입력하세요.</S.ErrorMessage>
        )}
        </S.Label>

        <S.Label>
          <p>비밀번호</p>
          <input 
            type="password" 
            placeholder='이메일을 입력하세요'
            {...register("memberPassword", {
              required: true,
              pattern: {
                value: passwordRegex
              }
            })}
          />
        {errors && errors?.memberPassword?.type === "required" && (
          <S.ErrorMessage>비밀번호를 입력하세요.</S.ErrorMessage>
        )}
        {errors && errors?.memberPassword?.type === "pattern" && (
          <S.ErrorMessage>소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.</S.ErrorMessage>
        )}
        </S.Label>

        <S.Label>
          <p>비밀번호 확인</p>
          <input 
            type="password" 
            placeholder='이메일을 입력하세요'
            {...register("memberPasswordConfirm", {
              required: true,
              validate: {
                matchPassword : (memberPasswordConfirm) => {
                  const { memberPassword } = getValues()
                  console.log(memberPasswordConfirm, memberPassword, memberPassword === memberPasswordConfirm)
                  return memberPassword === memberPasswordConfirm
                }
              }
            })}
          />
        {errors && errors?.memberPasswordConfirm && (
          <S.ErrorMessage>비밀번호가 일치하지 않습니다.</S.ErrorMessage>
        )}
        </S.Label>

        {/* 체크박스 */}
        <div>
          <p>취미</p>
          <label><input type="checkbox" name="hobby" value="soccer" {...register("hobbies")} /><span>축구</span></label>
          <label><input type="checkbox" name="hobby" value="basketball" {...register("hobbies")} /><span>농구</span></label>
          <label><input type="checkbox" name="hobby" value="baseball" {...register("hobbies")} /><span>야구</span></label>
        </div>

        <button disabled={isSubmitting}>회원 가입</button>
      </form>
    </div>
  );
};

export default Join;
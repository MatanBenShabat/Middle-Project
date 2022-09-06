import { useFormik } from "formik";
import { useState } from "react";
import { basicSchema } from "./schemas/indexBasicForm";
import "./BasicForm.css"

const onSubmit = async (values, actions) => {

    await new Promise((resolve) => setTimeout(resolve, 1000))
    actions.resetForm()

}

const BasicForm = () => {
    const {values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit} = useFormik({
        initialValues : {
            email: "", 
            age: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    console.log(errors);

    return(

        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="email">Email</label>
            <br />
            <input
                id="email" 
                type="email" 
                placeholder="enter your email" 
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />

            {errors.email && touched.email && <p className="error">{errors.email}</p>}

            <br />

            <label htmlFor="age">age</label>
            <br />
            <input
            id="age" 
            type="number" 
            placeholder="enter your age" 
            value={values.age}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.age && touched.age ? "input-error" : ""}

            />

            {errors.age && touched.age && <p className="error">{errors.age}</p>}


            <br />

            <label htmlFor="password">password</label>
            <br />
            <input
                id="password" 
                type="password" 
                placeholder="enter your password" 
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}

            />

            {errors.password && touched.password && <p className="error">{errors.password}</p>}


            <br />

            <label htmlFor="confirmPassword">confirm password</label>
            <br />
            <input
                id="confirmPassword" 
                type="password" 
                placeholder="confirm password" 
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}

            />

            {errors.confirmPassword && touched.confirmPassword && <p className="error">{errors.confirmPassword}</p>}


            <br />
            <br />

            <button disabled={isSubmitting}>submit</button>

        </form>
    )
};

export default BasicForm;
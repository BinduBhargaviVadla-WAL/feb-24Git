import { useFormik, Field, form } from "formik";
const Registration = () => {
    let user = [];
    let formik = useFormik({
        initialValues: {
            fullName: "",
            email: "",
            age: 21,
            password: "",
        },
        onSubmit(values) {
            console.log(`form submit`);
            console.log(values);
            let userOb = {
                FullName: formik.values.fullName,
                Email: formik.values.email,
                Age: formik.values.age,
                Password: formik.values.password
            }
            if (JSON.parse(localStorage.getItem("users"))) {
                let localUsers = JSON.parse(localStorage.getItem("users"));
                user.push(localUsers);
            }
            user.push(userOb);
            localStorage.setItem("users", JSON.stringify(user));
        },
        validate() {
            const errors = {};
            if (formik.values.fullName.length <= 5 || formik.values.fullName.length >= 20) {
                errors.fullName = "Full Name shoud be min 5 characters and max 20 characters"
            }
            if (formik.values.email.length <= 5 || formik.values.email.length >= 30) {
                errors.email = "Email should be more than 5 characters and less than 30 characters";
            }
            if (formik.values.password.length <= 4 || formik.values.password.length >= 20) {
                errors.password = "Password must be min 4 characters and max 20 characters";
            }
            if (formik.values.age <= 18 || formik.values.age >= 120) {
                errors.age = "Age should be a number between 18 and 120"
            }
            return errors;
        },
    });
    console.log(`Formiks:${formik}`);
    return (
        <div className="registration">
            <form onSubmit={formik.handleSubmit} noValidate>
                <h1>Registration Form</h1>
                <input
                    type="text"
                    name="fullName"
                    placeholder="Enter Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.fullName ? formik.errors.fullName : null}
                </div>
                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Id"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.email ? formik.errors.email : null}
                </div>
                <input
                    type="number"
                    name="age"
                    placeholder="Enter Age"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.age ? formik.errors.age : null}
                </div>
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                />
                <div className="text-danger">
                    {formik.errors.password ? formik.errors.password : null}
                </div>
                <button type="submit" className="submitBtn">Submit</button>
            </form>
        </div>

    )
}
export default Registration;
import React from 'react'
import { useForm } from 'react-hook-form'

export const DummyForm = () => {
    const { register, handleSubmit } = useForm()
    const submitHandler = (data) => {
        console.log(data)
    }
    return (
        <div style={{textAlign:"center"}}>
            <h2 style={{ textAlign: "center" }}>Home work Form</h2>
            {/* ### *10. Subscription Box Personalization Form*
                - Fields: Name, Subscription Type (Books/Tech Gadgets/Snacks), Frequency (Weekly/Monthly), Delivery Address  
                - On submission, display an order confirmation message. */}
            <h3>Subscription form </h3>
            <form onSubmit={handleSubmit(submitHandler)}>
                Name: <input type="text" name="name" {...register("name")} id="" /> <br />
                Subscription Type:
                <select  {...register("subtype")} id="">
                    <option value="book">Books</option>
                    <option value="Tech Gadgets">Tech Gadgets</option>
                    <option value="Snacks">Snacks</option>
                </select><br />
                Frequency :
                <select  {...register("subfreq")} id="">
                    <option value="month">Month</option>
                    <option value="year">year</option>
                </select><br />
                Address: <input type="text" {...register("addr")} id="" />
                <input type="submit" value="submit" />
            </form>
 <hr />
            <form onSubmit={handleSubmit(submitHandler)}>
                {/* ### *8. AI Chatbot Personality Customization*  
        - Fields: Bot Name, Personality Type (Friendly/Formal/Sarcastic), Response Speed (dropdown), Interests (checkboxes)  
        - On submission, display a summary of the chatbot settings. */}
                <br /> <h3>Bot personality Customization</h3>
                Bot Name: <input type="text" {...register("botname")} id="" /><br />
                personality type: <br />
                friendly<input type="radio" {...register("bottype")} name='bottype' value={"friendly"} id="" /> <br />
                formal<input type="radio" {...register("bottype")} name='bottype' value={"formal"} id="" /> <br />
                sarcastic<input type="radio" {...register("bottype")} name='bottype' value={"sarcastic"} id="" /> <br />
                <br />
                response speed<br />
                <select  {...register("response")} id="">
                    <option value="medium">medium</option>
                    <option value="fast">fast</option>
                </select>
                select hobbies <br />
                Gaming<input type="checkbox" {...register("hobbies")} value={"gaming"} name="hobbies" /> <br />
                reading<input type="checkbox" {...register("hobbies")} value={"reading"} name="hobbies" /> <br />
                foodie<input type="checkbox" {...register("hobbies")} value={"foodie"} name="hobbies" /> <br />
                travel<input type="checkbox" {...register("hobbies")} value={"travel"} name="hobbies" />
            </form>
<hr />
            <h2>Feedback</h2>
            {/* feedback :- satisfcn with a product of service, suggstn for improvmnt, overall exp */}
            <form onSubmit={handleSubmit(submitHandler)}>
                give ratings:
                <select {...register("rating")}>
                    <option value="bad">1</option>
                    <option value="ok">2</option>
                    <option value="good">3</option>
                    <option value="brilliant">4</option>
                </select><br />
                suggestion: <textarea {...register("suggest")} id=""></textarea> <br />
                overall experience: <input type="text" {...register("exp")} id="" />
                <input type="submit" value="submit" />

            </form>
       
        


        </div>
    )
}

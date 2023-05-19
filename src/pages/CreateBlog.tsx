import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;
import {SyntheticEvent, useState} from "react";

const CreateBlog = () => {

    const[title, setTitle] = useState('');
    const[content, setContent] = useState('');
    const[errorText, setErrorText] = useState('');
    const[redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        /*const data = {
            title,
            content
        };
        console.log(data);
        const res = await axios.post('http://localhost:3000/blogs', data, {withCredentials: true});
        console.log(res);

        if(res.status == 201) {
            setRedirect(true);
        }
        if(res.status != 201){
            setErrorText('Napaka v podatkih');
        }*/
    }

    return (
        <>
            <main className="form-signin w-100 m-auto">
                <h2 className={"error"}>{errorText}</h2>
                <form onSubmit={submit}>
                    <h1 className="h3 mb-3 fw-normal">Insert blog</h1>
                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput"
                               placeholder="name@example.com"
                               onChange={(e) => setTitle(e.target.value)} />
                        <label htmlFor="floatingInput">Title</label>
                    </div>
                    <div className="form-floating">
                        <textarea className="form-control" id="floatingContent"
                               placeholder="Input content"
                               onChange={(e) => setContent(e.target.value)}>
                        </textarea>
                        <label htmlFor="floatingContent">Input content</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Save</button>
                </form>
            </main>
        </>
    )
}

export default CreateBlog;
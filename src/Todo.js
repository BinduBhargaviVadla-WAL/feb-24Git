import { useState, useEffect } from "react";
import axios from "axios";

function Todo() {
    let [todos, setTodos] = useState([]);
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/todos").then((res) => {
            let list = res.data;
            console.log(list);
            console.log(list.length);
            setTodos(list);
        }).catch(function (error) {
            alert(error);
        });
    }, []);
    if (Object.keys(todos).length === 0) {
        return (<div></div>)
    }
    return (
        <div className="todo">
            <h1 className="h1">Todos</h1>
            <div className="tableDiv">
                <table>
                    <tr>
                        <th>Id</th>
                        <th>User Id</th>
                        <th>Title</th>
                        <th>Due on</th>
                        <th>Status</th>
                    </tr>
                    {todos.map((val, index) => {
                        return (
                            <tr>
                                <td>{val.id}</td>
                                <td>{val.user_id}</td>
                                <td>{val.title}</td>
                                <td>{val.due_on}</td>
                                <td>{val.status}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>

        </div>
    );
}
export default Todo;
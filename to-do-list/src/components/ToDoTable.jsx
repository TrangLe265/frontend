function ToDoTable(props){
    return (
        <table>
        <tbody>
            <tr>
                <th>Description</th>
                <th>Date</th>
            </tr>
            {// writing JavaS here so we need a { }
            props.todos.map((todo,index) => //here you can name whatever
                <tr key={index}>
                    <td>{ todo.description }</td>
                    <td> { todo.duedate } </td>
                    <td><button onClick={() => props.handleDelete(index)}>Done</button></td>
                </tr> 
            )

            }

        </tbody>
    </table>
    ); 

}
export default ToDoTable; 
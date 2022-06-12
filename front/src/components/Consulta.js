
import { Form, Input, Button } from 'antd';
import { useEffect, useState } from 'react';

export default function Consulta() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        getAllUsers();
    }, []);



    function onFinish(values) {
        createUser(values)

    }

    function onFinishFailed() {
        alert("Error");
    }

    async function createUser(values) {
        try {
            let response = await fetch('http://localhost:4001/users/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });
            response = await response.json();
            alert(response.message);
            getAllUsers();
        } catch (e) {
            alert('Ocurrió un error inesperado');
        }
    }

    async function getAllUsers() {
        try {
            let response = await fetch('http://localhost:4001/users/getAllUsers');
            response = await response.json();

            let users = response.allUsers

            users = users.map((user, i) => {
                return <p key={i}>Name:{user.name} Age:{user.age}</p>
            });

            // console.log(users)
            return setUsers(users);
        } catch (e) {
            alert('Ocurrió un error inesperado');
        }
    }




    return (
        <>
            <div>
                <Form
                    name="consulta"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nombre"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su nombre!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Edad"
                        name="age"
                        rules={[
                            {
                                required: true,
                                message: 'Por favor ingrese su edad!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Crear Usuario
                        </Button>
                    </Form.Item>

                </Form>
            </div>
            {
                users.length > 0 && <div>
                    {users}
                </div>
            }
        </>
    )
}
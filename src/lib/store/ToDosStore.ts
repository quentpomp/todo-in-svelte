import { v4 as uuidv4 } from "uuid";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const data = browser ? JSON.parse(window.localStorage.getItem('st-todo-list') || "[]") ?? [] : [];
console.log("data", data)

export const todos = writable(data)

type Todo = {
    id: string,
    text: string,
    complete: boolean
}

todos.subscribe((val) => {
    if (browser) {
        localStorage.setItem("qp-todo-list", JSON.stringify(val))
    }
})

export const addTodo = () => {
    todos.update((currentState: Todo[]) => {
        return [...currentState, { id: uuidv4(), text: '', complete: false }];
    })
}

export const deleteTodo = (id: any) => {
    todos.update((currentState: Todo[]) => {
        currentState.filter((todo: any) => todo.id !== id)
    })
}

export const toggleComplete = (id: any) => {
    todos.update((currentState: Todo[]) => {
        return currentState.map((todo: any) => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete }
            }
            return todo
        })
    })
}

export const editTodo = (id: any, text: string) => {
    todos.update((currentState: Todo[]) => {
        return currentState.map((todo: any) => {
            if (todo.id === id) {
                return { ...todo, text }
            }
            return todo
        })
    })
}
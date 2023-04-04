// @ts-nocheck
import { v4 as uuidv4 } from "uuid";
import { writable } from "svelte/store";
import { browser } from "$app/environment";

const data = browser ? JSON.parse(window.localStorage.getItem("qp-todo-list")) ?? [] : []

export const todos = writable()

todos.subscribe((val) => {
    if (browser) {
        localStorage.setItem("qp-todo-list", JSON.stringify(val))
    }
})

export const addTodo = () => {
    todos.update((current) => {
        return [...current, {id: uuidv4(), text: "", complete: false}]
    })
}

export const deleteTodo = (id) => {
    todos.update(current => {
        current.filter((todo) => todo.id !== id)
    })
}

export const toggleComplete = (id) => {
    todos.update(current => {
        return current.map((todo) => {
            if (todo.id === id) {
                return { ...todo, complete: !todo.complete }
            }
            return todo
        })
    })
}

export const editTodo = (id, text) => {
    todos.update(current => {
        return current.map((todo) => {
            if (todo.id === id) {
                return { ...todo, text }
            }
            return todo
        })
    })
}
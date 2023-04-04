<script>
    import ProgressSection from "$lib/components/progress/ProgressSection.svelte";
import AddTodoSection from "../lib/components/todos/todo/AddTodoSection.svelte";
    import TodoSection from "../lib/components/todos/todo/TodoSection.svelte";
</script>

<div class="min-h-screen bg-olive-one selection:bg-green-two md:py-24 md:px-8">
    <main class="mx-auto min-h-screen max-w-none rounded-none bg-cream-four px-5 py-10 outline-none md:min-h-max md:max-w-[60rem] md:rounded-2xl md:px-8">
        <h1 class='2xl font-bold text-gray-three'>Dashboard</h1>
        <div class="mt-10">
            <AddTodoSection />
            <TodoSection />
            <ProgressSection />
        </div>
    </main>
</div>
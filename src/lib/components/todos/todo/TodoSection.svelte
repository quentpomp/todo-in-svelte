<script>
  import { todos } from "../../../store/ToDosStore";
  import TodoInput from "./TodoInput.svelte";
</script>

<section class="mt-4 space-y-4">
    {#each $todos as todo (todo.id)}
        <TodoInput {todo} /> 
    {/each} 
</section>
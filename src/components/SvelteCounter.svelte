
<script lang="ts">
  let children;
  let count = 0;
  let hello: string

  function add() {
		count += 1;
	}

  function subtract() {
		count -= 1;
	}
</script>

<div class="counter">
  <button on:click={subtract}>-</button>
  <pre>{ count }</pre>
  <button on:click={add}>+</button>
</div>
<div class="counter-message">
  <slot />
</div>

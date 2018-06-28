<template>
<div class="search-form-button" @click="$emit('click')">
  <i class="fa fa-search" aria-hidden="true"></i>
</div>
</template>

<script>
export default {
  name: 'search-form-button'
};
</script>

<style>
.search-form-button {
  background-color: #ff9800;
  color: #fff;
  min-height: 40px;
  min-width: 40px;
  max-width: 40px;
  max-height: 40px;
  border-radius: 25px;
  text-align: center;
  padding-top: 9px;
  box-shadow: 1px 2px 4px 0 rgba(0, 0, 0, 0.4);
  position: absolute;
  right: 7px;
  bottom: -10px;
}
.search-form-button:hover {
  box-shadow: none;
  cursor: pointer;
}
</style>

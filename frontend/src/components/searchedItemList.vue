<template>
    <div class="searchedItemList">
        <div v-for="i in searchedUserNameList" v-bind:key="i._id">
            <br>
        </div>
        <div v-for="i in searchedTagList" v-bind:key="i._id">
            <br>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchedItemList',
    props: {
        searchedUserNameList: Array,
        searchedTagList: Array
    }
}
</script>

<style>
.searchedItemList {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>

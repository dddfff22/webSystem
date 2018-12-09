<template>
    <div class="searchedItemList">
        {{this.logging()}}
        <div v-for="i in searchedUserIdList" v-bind:key="i._id">
            <br>
            {{i.userId}} - {{i.description}}
        </div>
        <div v-for="i in searchedTagList" v-bind:key="i._id">
            <br>
            #{{i.hashTag}}
        </div>
        <!-- {{this.logging()}} -->
    </div>
</template>

<script>
export default {
    name: 'SearchedItemList',
    props: {
        searchedList: Array
    },
    data() {
        return {
            searchedUserIdList: Array,
            searchedTagList: Array
        }
    },
    beforeUpdate() {
        this.getSearchedList();
    },
    methods: {
        getSearchedList: function() {
            this.searchedUserIdList = this.searchedList[0];
            this.searchedTagList = this.searchedList[1];
        },

        logging: function() {
            console.log("SearchedItemList, searchedList " + this.searchedList);
            console.log(this.searchedList);
            console.log("SearchedItemList, searchedUserIdList " + this.searchedUserIdList);
            console.log(this.searchedUserIdList);
            console.log("SearchedItemList, searchedTagList " + this.searchedTagList);
            console.log(this.searchedTagList);
        }
    }
}
</script>

<style>
.searchedItemList {
    display: grid;
    grid-template-columns: 1fr 1fr;
}
</style>

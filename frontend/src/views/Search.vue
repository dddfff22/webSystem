<template>
  <div class="search">
      <!-- <form>
          <input name="searchValue" v-model="searchValue">
      </form> -->
      {{this.searchValue}}
      <div id="searchedItemList">
        <SearchedItemList v-bind:searchedList="searchResult"></SearchedItemList>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchedItemList from '@/components/SearchedItemList.vue'

export default {
  name: 'Search',
  components: {
    SearchedItemList
  },
  data() {
      return {
          searchValue: this.$route.params.searchValue,
          searchResult: Array,
        //   searchResultwithUserId: Array,
        //   searchResultwithHashTag: Array
      }
  },
  created() {
      this.search();
  },
//   beforeUpdated() {
    //   this.search();
//   },
  watch: {
      "$route": "setSearchValue"
  },
  methods: {
      setSearchValue: function() {
          this.searchValue = this.$route.params.searchValue;
          this.search();
      },
      search: function() {
          console.log("search");
      this.$http.get('http://localhost:8000/search/' + this.searchValue)
    .then((result) => {
        this.searchResult = result.data;
        // this.searchResultwithUserId = result.data[0];
        // this.searchResultwithHashTag = result.data[1];
        console.log(this.searchResult);
        // console.log(this.searchResultwithUserId);
        // console.log(this.searchResultwithHashTag);
      });
      },

    //   searchWithUserName: function() {
    //       console.log("search");
    //   this.$http.get('http://localhost:8000/search/' + this.searchValue)
    // .then((result) => {
    //     this.searchResultwithUserName = result.data;
    //     console.log(this.searchResultwithUserName);
    //   });
    //   },
  
    //   searchWithHashTag: function() {
    //       console.log("search");
    //   this.$http.get('http://localhost:8000/search/' + this.searchValue)
    // .then((result) => {
    //     this.searchResultwithHashTag = result.data;
    //     console.log(this.searchResultwithHashTag);
    //   });
    //   }
  }
}
</script>

<style>
.search{
    margin-top: 100px;
}
</style>
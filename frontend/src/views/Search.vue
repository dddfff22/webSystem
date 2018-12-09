<template>
  <div class="search">
      <!-- <form>
          <input name="searchValue" v-model="searchValue">
      </form> -->
      <div id="searchResultList"></div>
      <SearchedItemList v-bind:searchedUserNameList="searchResultwithUserName" v-bind:searchedTagList="searchResultwithHashTag"></SearchedItemList>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchedItemList from '@/components/SearchedItemList.vue'

export default {
  name: 'search',
  components: {
    SearchedItemList
  },
  data() {
      return {
          searchValue: String,
          searchResultwithUserName: Array,
          searchResultwithHashTag: Array
      }
  },
  created() {
      this.searchWithUserName();
      this.searchWithHashTag();
  },
  methods: {
      searchWithUserName: function() {
          console.log("search");
      this.$http.get('http://localhost:8000/search/' + this.searchValue)
    .then((result) => {
        this.searchResultwithUserName = result.data;
        console.log(this.searchResultwithUserName);
      });
      },
  
      searchWithHashTag: function() {
          console.log("search");
      this.$http.get('http://localhost:8000/search/' + this.searchValue)
    .then((result) => {
        this.searchResultwithHashTag = result.data;
        console.log(this.searchResultwithHashTag);
      });
      }
  }

//       search: function() {
//           console.log("search");
//       this.$http.get('http://localhost:8000/search/' + this.searchValue)
//     .then((result) => {
//         this.searchResult = result.data;
//         console.log(this.searchResult);
//       });
//       }
//   }
}
</script>

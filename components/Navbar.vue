<template>
    <v-app-bar app color="white" flat >
      <v-container class="py-0 fill-height">
        <v-avatar width="164" :tile="true" >
            <nuxt-link to="/" >
                <img :src="require('@/assets/img/logo.png')" alt="logo">
            </nuxt-link>
        </v-avatar>

        <v-btn
          class="btn-header-link"
          text
          v-click-outside="hide"
          @click="toggle"
        >
          Товары
           <v-icon>{{ opened ? 'fa-times' : 'fa-bars' }}</v-icon>
        </v-btn>
        <v-btn  v-if="$auth.loggedIn && $auth.user.is_superuser" to="/admin-panel">admin panel</v-btn>
        <v-btn
          v-for="(link, idx) in links"
          :key="idx"
          :to="link.path"
          text class="btn-header-link"
        > {{ link.title }}
        </v-btn>
        

        <v-spacer></v-spacer>
        <div v-if="$auth.loggedIn">
            <menuuser />
        </div>
            <div v-else>
        <v-btn depressed to="/registration">
            Регистрация
        </v-btn >
       <no-ssr> <v-btn ><logindialog /> </v-btn></no-ssr>
            </div>
      </v-container>
      <div 
        v-show="opened" 
        class="meny-header-category"
      >
         <v-container>
            <div class="header-cat-container">
              <div 

                v-for="(n,i) in category.results"

                :key="i"
                link
                class="header-cat-link"
              >

                <a href="#"  @click.prevent="openCategory(n.id)">
                  <v-icon>fa-file-contract</v-icon>
                  <span>{{ n.name }}</span>
                </a>

              </div>

            </div>
          </v-container>
      </div>
    </v-app-bar>
</template>

<script>
import ClickOutside from 'vue-click-outside'
import logindialog from '@/components/modal/login_dialog.vue'
import menuuser from '@/components/user/menu_user.vue'

  export default {
    components:{
      logindialog,
      menuuser,
    },
    data () {
      return {
        category:[],
        //menyHeader: false,
        opened: false,
        links: [
          // { title: 'Каталог', path: ''},
          { title: 'Аренда оборудования', path: '/rent'},
          { title: 'Монтажники', path: '/installers'},
        ],
      }
    },

    async fetch(){
        const data = await this.$axios.$get('http://193.123.37.74:8000/catalog/categories/')
        this.category = data
    },
    fetchKey: 'navbar',
    methods: {
      toggle () {
        this.opened = !this.opened 
      },
      hide () {
        this.opened = false
      },
      openCategory (id){
        this.$router.push('/catalog/'+id)
      },
      // menyHeaderShow(){
      //   this.menyHeader = !this.menyHeader;
      // }
    },
    mounted () {
      // prevent click outside event with popupItem.
     // this.popupItem = this.$el
     console.log(this.$auth.user);
    },
 
    directives: {
      ClickOutside
    }
  }
</script>
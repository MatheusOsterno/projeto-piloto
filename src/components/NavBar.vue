<template>
  <nav>
    <v-system-bar app dark >
        <v-spacer></v-spacer>
        <v-icon>mdi-minus</v-icon>
        <v-icon>mdi-checkbox-blank-outline</v-icon>
        <v-icon>mdi-close</v-icon>
    </v-system-bar>
    <v-app-bar app color="orange" >
        <v-toolbar-tittle><img src="../../public/MFlogo.png" alt=""></v-toolbar-tittle>
        <v-btn text class="ml-2" to="/">Games</v-btn>
        <v-btn text class="ml-2" to="/videogame">Video Games</v-btn>
        <v-btn text class="ml-2" to="/acessorios">Acessórios</v-btn>
        <v-btn text class="ml-2" to="/videogame">Contato</v-btn>
        <v-spacer></v-spacer>
        <v-autocomplete
        class="mt-5"
        clearable
        hide-no-data 
        hide-selected
        color="red" 
        label="Pesquisa"
        prepend-inner-icon="search"
        flat
        ></v-autocomplete>
        <v-btn icon>
          <v-badge color="red" content="2" overlap>
            <v-icon>far fa-bell</v-icon>
          </v-badge>
        </v-btn>
        <v-badge bordered bottom color="red" dot offset-x="10" offset-y="10">
          <v-avatar size="40">
            <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
          </v-avatar>
        </v-badge>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
    data:()=>({
        drawer:null,
    })
}
</script>
<style scoped>
img {
  display: flex;
  align-items: center;
  width: 120px;
}

</style>
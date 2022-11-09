<template lang="">
    <div class="mx-3">
        <h2 class="mt-2 grey--text">Popular Movies</h2>
        <v-container fluid>
            <v-row>
                <v-col cols="12" sm="3" v-for="game in games" :key="movie.id">
                    <GameCard :
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>

import GameCard from '@/components/GameCard'
export default {
    components: {
        GameCard,
    },
    data: function(){
        return{
            game:[],
            genero:[],
        }
    }
}

</script>
<style>
    
</style>
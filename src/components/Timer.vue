<template>

  <div id="timer">
    <div v-if="currentTime">
      <div class="colonneTimer">
        <span v-if="days" class="nombre">{{ days }}</span>
        <span class="libelle">jours</span>
      </div>
      <div class="colonneTimer">
        <span v-if="hours" class="nombre">{{ hours | formatTime }}</span>
        <span class="libelle">heures</span>
      </div>
      <div class="colonneTimer">
        <span class="nombre">{{ minutes | formatTime }}</span>
        <span class="libelle"> minutes</span>
      </div>
      <div class="colonneTimer">
        <span class="nombre">{{ seconds | formatTime }}</span>
        <span class="libelle"> secondes</span>
      </div>
<!--      <span v-if="days">{{ days }}</span>:<span v-if="hours">{{-->
<!--        hours | formatTime-->
<!--      }}:</span><span>{{ minutes | formatTime }}:{{ seconds | formatTime }}</span><br/>-->
    </div>
    <div class="libelle" v-if="!currentTime">
      Le compte à rebours est terminé ! Maintenant, à vos pc
      et préparez vous au pire !
    </div>
  </div>

</template>

<script>
export default {
  name: "Timer",
  props: {
    deadline: {
      type: String,
      required: true,
      default:"2022-01-21"
    },
    speed: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      // currentTime: Date.parse(this.deadline) - Date.parse(new Date())
      currentTime: 1
    };
  },
  mounted() {
    setTimeout(this.countdown, 1000);
  },
  computed: {
    seconds() {
      return Math.floor((this.currentTime / 1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime / 1000 / 60) % 60);
    },
    hours() {
      return Math.floor((this.currentTime / (1000 * 60 * 60)) % 24);
    },
    days() {
      return Math.floor(this.currentTime / (1000 * 60 * 60 * 24));
    }
  },
  filters: {
    formatTime(value) {
      if (value < 10) {
        return "0" + value;
      }
      return value;
    }
  },
  methods: {
    countdown() {
      this.currentTime = Date.parse(this.deadline) - Date.parse(new Date());
      console.log(this.currentTime);
      if (this.currentTime > 0) {
        setTimeout(this.countdown, this.speed);
      } else {
        this.currentTime = null;
      }
    }
  }
}
</script>

<style scoped>

#timer>div{
  display: flex;
  flex-direction: row;
}

.colonneTimer{
  display: flex;
  flex-direction: column;
  margin: 0 2vw 0 2vw;
  width: 10vw;
  text-align: center;
  /*background-color: rgba(255,255,255,0.3);*/
  background-image: url(../assets/cercle.png);
  background-position: center;
  /*border-radius: 50px;*/
}

.nombre{
  font-size: 3em;
}

.libelle{
  font-size: 2em;
}


@media screen and (max-width: 1000px) {

  .colonneTimer{
    width: 15vw;
    height: 15vh;
  }

  .nombre{
    font-size: 2.5em;
  }
  .libelle{
    font-size: 1.5em;
  }
}

@media screen and (max-width: 500px) {
  .colonneTimer{
    display: flex;
    flex-direction: column;
    margin: 0 5vw 0 5vw;
    text-align: center;
    background-image: url(../assets/cercle.png);
    background-position: center;
    background-size: auto;
    background-repeat: no-repeat;
  }

  .nombre{
    font-size: 3em;
  }

  .libelle{
    font-size: 1em;
  }
}

</style>

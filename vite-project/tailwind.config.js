/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
        keyframes:{
            'fade-in':{
                '0%':{
                   opacity:0
                }
                '100%':{
                    opacity:1
                }
            }
        },
        animation:  {
                'fadein': fade-in 2s ease-in forwards
        }
    },

  },
  plugins: [],
}


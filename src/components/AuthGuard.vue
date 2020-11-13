<script>
import router from '../router'

export default {
    created() {
        var auth = localStorage.getItem('user')
        if (typeof auth == 'undefined' || auth == null)
            router.push('login')
    }
}
</script>
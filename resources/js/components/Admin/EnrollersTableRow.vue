<template>
    <tr>
        <td>{{ enroller.lastname }} {{ enroller.firstname }} {{ '' ?? enroller.patronymic }}</td>
        <td>{{ enroller.email }}</td>
        <td>{{ enroller.phone }}</td>
        <td>{{ enroller.organization }}</td>
        <td>{{ enroller.position }}</td>
        <td>{{ enroller.area }}</td>
        <td>{{ enroller.created_at }}</td>
    </tr> 
</template>
<script>

export default { 
    props: {
        enroller: {
            type: Object,
            required: true,
        },
    },
    setup() {
        return {
        }
    }
}
</script>

<style lang="scss">

</style>
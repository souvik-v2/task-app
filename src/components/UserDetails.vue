<template>
    <section>
    <div>
        <table>
            <tr v-for="(value, key) in info" :key="value.id">
            <th>{{ key }}</th>
            <td>{{ value }}</td>
            </tr>
        </table>
    </div>
    </section>
</template>
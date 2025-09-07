import { StyleSheet, Text, View } from 'react-native';
import colors from '../theme/colors';


export default function AboutScreen() {
return (
<View style={styles.container}>
<Text style={styles.title}>Sobre</Text>
<Text style={styles.body}>
App acadêmico de demonstração: navegação, layout, formulário com validação e organização de código.
</Text>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 20 },
title: { color: colors.text, fontSize: 22, fontWeight: '800', marginBottom: 8 },
body: { color: colors.muted, fontSize: 14 },
});
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../navigation/RootNavigator';
import colors from '../theme/colors';


type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;


export default function HomeScreen({ navigation }: Props) {
return (
<View style={styles.container}>
<Text style={styles.title}>Bem-vindo(a) 👋</Text>
<Text style={styles.subtitle}>Agende traslado, hotel e outros serviços do seu voo executivo.</Text>


<TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Services')}>
<Text style={styles.btnText}>Ver serviços</Text>
</TouchableOpacity>


<TouchableOpacity style={[styles.btn, styles.btnOutline]} onPress={() => navigation.navigate('NewOrder')}>
<Text style={styles.btnOutlineText}>Novo pedido</Text>
</TouchableOpacity>


<TouchableOpacity onPress={() => navigation.navigate('About')}>
<Text style={styles.link}>Sobre o app</Text>
</TouchableOpacity>
</View>
);
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: colors.bg, padding: 20, gap: 16 },
title: { color: colors.text, fontSize: 26, fontWeight: '800', marginTop: 8 },
subtitle: { color: colors.muted, fontSize: 14, marginBottom: 8 },
btn: { backgroundColor: colors.primary, padding: 14, borderRadius: 12, alignItems: 'center' },
btnText: { color: '#001219', fontWeight: '700' },
btnOutline: { backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.primary },
btnOutlineText: { color: colors.primary, fontWeight: '700' },
link: { color: colors.muted, textAlign: 'center', marginTop: 8, textDecorationLine: 'underline' },
});
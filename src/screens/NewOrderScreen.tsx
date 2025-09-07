import { zodResolver } from '@hookform/resolvers/zod';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Switch, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { z } from 'zod';
import { RootStackParamList } from '../navigation/RootNavigator';
import colors from '../theme/colors';

const schema = z.object({
  name: z.string().min(2, 'Informe seu nome.'),
  email: z.string().email('E-mail inválido.'),
  service: z.string().min(1, 'Selecione um serviço.'),
  date: z.string().min(10, 'Data no formato AAAA-MM-DD.'),
  time: z.string().min(5, 'Hora no formato HH:MM.'),
  pax: z.coerce.number().min(1, 'Pelo menos 1 passageiro.').max(50, 'Máx. 50.'),
  terms: z.boolean().refine(v => v === true, 'É preciso aceitar os termos.'),
});

type FormData = z.infer<typeof schema>;
type Props = NativeStackScreenProps<RootStackParamList, 'NewOrder'>;

export default function NewOrderScreen({ navigation }: Props) {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { service: '', terms: false, pax: 1 },
  });

  const [serviceFocus, setServiceFocus] = useState(false);

  const onSubmit = (data: FormData) => {
    navigation.navigate('Confirmation', {
      name: data.name,
      email: data.email,
      service: data.service,
      date: data.date,
      time: data.time,
      pax: data.pax,
    });
  };

  const FieldError = ({ msg }: { msg?: string }) =>
    msg ? <Text style={styles.error}>{msg}</Text> : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Pedido</Text>

      <Text style={styles.label}>Nome</Text>
      <Controller
        control={control}
        name="name"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="Seu nome"
            placeholderTextColor="#64748B"
          />
        )}
      />
      <FieldError msg={errors.name?.message} />

      <Text style={styles.label}>E-mail</Text>
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            keyboardType="email-address"
            autoCapitalize="none"
            value={value}
            onChangeText={onChange}
            style={styles.input}
            placeholder="voce@email.com"
            placeholderTextColor="#64748B"
          />
        )}
      />
      <FieldError msg={errors.email?.message} />

      <Text style={styles.label}>Serviço</Text>
      <Controller
        control={control}
        name="service"
        render={({ field: { onChange, value } }) => (
          <TextInput
            value={value}
            onChangeText={onChange}
            onFocus={() => setServiceFocus(true)}
            onBlur={() => setServiceFocus(false)}
            style={[styles.input, serviceFocus && { borderColor: colors.primary }]}
            placeholder="Ex.: Traslado / Hotel / Catering"
            placeholderTextColor="#64748B"
          />
        )}
      />
      <FieldError msg={errors.service?.message} />

      <View style={{ flexDirection: 'row', gap: 12 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.label}>Data (AAAA-MM-DD)</Text>
          <Controller
            control={control}
            name="date"
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="2025-09-10"
                placeholderTextColor="#64748B"
              />
            )}
          />
          <FieldError msg={errors.date?.message} />
        </View>

        <View style={{ width: 120 }}>
          <Text style={styles.label}>Hora (HH:MM)</Text>
          <Controller
            control={control}
            name="time"
            render={({ field: { onChange, value } }) => (
              <TextInput
                value={value}
                onChangeText={onChange}
                style={styles.input}
                placeholder="14:30"
                placeholderTextColor="#64748B"
              />
            )}
          />
          <FieldError msg={errors.time?.message} />
        </View>
      </View>

      <Text style={styles.label}>Passageiros (1–50)</Text>
      <Controller
        control={control}
        name="pax"
        render={({ field: { onChange, value } }) => (
          <TextInput
            keyboardType="number-pad"
            value={String(value ?? '')}
            onChangeText={(t) => onChange(Number(t.replace(/\D/g, '')))}
            style={styles.input}
            placeholder="1"
            placeholderTextColor="#64748B"
          />
        )}
      />
      <FieldError msg={errors.pax?.message} />

      <View style={styles.row}>
        <Text style={{ color: colors.muted, flex: 1 }}>Aceito os termos de serviço</Text>
        <Controller
          control={control}
          name="terms"
          render={({ field: { onChange, value } }) => (
            <Switch value={value} onValueChange={onChange} />
          )}
        />
      </View>
      <FieldError msg={errors.terms?.message} />

      <TouchableOpacity style={styles.btn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.btnText}>Enviar pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.bg, padding: 20, gap: 8 },
  title: { color: colors.text, fontSize: 22, fontWeight: '800', marginBottom: 4 },
  label: { color: colors.muted, marginTop: 8, marginBottom: 4 },
  input: {
    backgroundColor: colors.card,
    color: colors.text,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#1F2937',
  },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12, marginTop: 8 },
  btn: { backgroundColor: colors.primary, padding: 14, borderRadius: 12, marginTop: 12, alignItems: 'center' },
  btnText: { color: '#001219', fontWeight: '800' },
  error: { color: colors.danger, marginTop: 4, fontSize: 12 },
});

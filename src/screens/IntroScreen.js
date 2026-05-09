import React from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function Sticker({ text, rotate, color, textColor, left }) {
  return (
    <View
      style={[
        styles.sticker,
        {
          backgroundColor: color,
          marginLeft: left,
          transform: [{ rotate }],
        },
      ]}
    >
      <Text style={[styles.stickerText, { color: textColor }]}>{text}</Text>
    </View>
  );
}

export default function IntroScreen({ theme, introIndex, nextIntro, previousIntro, onFinish }) {
  const isFirst = introIndex === 0;
  const topBg = theme.mode === "dark" ? "#242424" : "#D6D6D6";
  const bottomBg = theme.mode === "dark" ? theme.orange : "#222222";

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: topBg }]}>
      <View style={[styles.introStage, { backgroundColor: topBg }]}>
        {isFirst ? (
          <View style={styles.stickerGroup}>
            <Sticker
              text="Descubra"
              rotate="-11deg"
              color={theme.mode === "dark" ? theme.orange : "#FFFFFF"}
              textColor={theme.mode === "dark" ? "#FFFFFF" : "#222222"}
              left={10}
            />
            <Sticker text="Conecte" rotate="8deg" color="#252525" textColor="#FFFFFF" left={40} />
            <Sticker
              text="Participe"
              rotate="-7deg"
              color={theme.mode === "dark" ? "#FFD5BE" : "#FFFFFF"}
              textColor={theme.mode === "dark" ? theme.orangeDark : "#222222"}
              left={26}
            />
          </View>
        ) : (
          <View style={styles.ticketIntroWrap}>
            <View style={[styles.ticketShadow, { borderColor: theme.text }]} />
            <View
              style={[
                styles.ticketIntro,
                { backgroundColor: theme.orange, borderColor: theme.text },
              ]}
            >
              <Ionicons name="ticket" size={58} color="#1F1F1F" />
              <Text style={styles.ticketIntroText}>UNI</Text>
            </View>
          </View>
        )}
      </View>

      <View style={[styles.introBottom, { backgroundColor: bottomBg }]}>
        <Text style={styles.introTitle}>
          {isFirst
            ? "Descubra os próximos eventos da sua faculdade"
            : "Não perca nenhum evento da sua faculdade"}
        </Text>
        <Text style={styles.introText}>
          {isFirst
            ? "Crie encontros e conecte-se aos melhores eventos para viver sua faculdade com mais presença."
            : "Crie sua conta e encontre em um só lugar tudo que acontece perto de você: palestras, música, tecnologia e atividades."}
        </Text>

        <View style={styles.introDots}>
          {[0, 1].map((item) => (
            <View
              key={item}
              style={[
                styles.dot,
                {
                  width: introIndex === item ? 18 : 5,
                  backgroundColor:
                    introIndex === item ? "#FFFFFF" : "rgba(255,255,255,0.45)",
                },
              ]}
            />
          ))}
        </View>

        <View style={styles.introActions}>
          {!isFirst ? (
            <TouchableOpacity onPress={previousIntro} style={styles.introLink}>
              <Text style={styles.introActionText}>Anterior</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.introLink} />
          )}

          <TouchableOpacity
            onPress={() => nextIntro(onFinish)}
            style={styles.introLink}
          >
            <Text style={styles.introActionText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  introStage: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  stickerGroup: {
    width: 190,
    height: 210,
    justifyContent: "center",
  },
  sticker: {
    alignSelf: "flex-start",
    paddingHorizontal: 18,
    paddingVertical: 7,
    borderRadius: 12,
    marginVertical: 2,
    shadowColor: "#000",
    shadowOpacity: 0.24,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 4,
  },
  stickerText: {
    fontSize: 23,
    fontWeight: "900",
  },
  ticketIntroWrap: {
    width: 145,
    height: 170,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ rotate: "-18deg" }],
  },
  ticketShadow: {
    position: "absolute",
    width: 116,
    height: 116,
    borderWidth: 5,
    borderRadius: 8,
    transform: [{ rotate: "-5deg" }],
  },
  ticketIntro: {
    width: 96,
    height: 120,
    borderRadius: 8,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  ticketIntroText: {
    color: "#1F1F1F",
    fontWeight: "900",
    marginTop: 2,
  },
  introBottom: {
    minHeight: 218,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 22,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  introTitle: {
    color: "#FFFFFF",
    fontWeight: "900",
    fontSize: 18,
    lineHeight: 23,
    textAlign: "center",
  },
  introText: {
    color: "rgba(255,255,255,0.84)",
    fontSize: 12,
    lineHeight: 17,
    textAlign: "center",
    marginTop: 14,
    paddingHorizontal: 6,
  },
  introDots: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
    marginTop: 18,
  },
  dot: {
    height: 5,
    borderRadius: 4,
  },
  introActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
  },
  introLink: {
    minWidth: 90,
    minHeight: 34,
    alignItems: "center",
    justifyContent: "center",
  },
  introActionText: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 13,
  },
});


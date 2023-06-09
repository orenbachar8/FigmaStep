import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const SendLink = () => {
  return (
    <View style={styles.sendLink}>
      <View style={styles.tabBar}>
        <View style={styles.icon}>
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolshomeoutline.png")}
          />
          <Image
            style={styles.faSolidwalkingIcon}
            contentFit="cover"
            source={require("../assets/fasolidwalking2.png")}
          />
          <Image
            style={[styles.trophyIcon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/trophy1.png")}
          />
          <Image
            style={styles.iconamoonprofileFill}
            contentFit="cover"
            source={require("../assets/iconamoonprofilefill1.png")}
          />
        </View>
      </View>
      <View style={[styles.personalFrame, styles.personalFramePosition]}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
        <Text style={styles.name}>Oren</Text>
        <Text style={styles.title}>Profile</Text>
        <Image
          style={styles.iconexlightedit1}
          contentFit="cover"
          source={require("../assets/iconexlightedit-1.png")}
        />
      </View>
      <View style={styles.homeIndicator}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.statusBarIcon, styles.personalFramePosition]}
        contentFit="cover"
        source={require("../assets/status-bar3.png")}
      />
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.groupChildLayout]} />
        <Text style={styles.kd08cs2006}>KD08CS2006</Text>
        <View style={styles.rectangle} />
        <Text style={styles.yourInvitationCode}>Your Invitation Code</Text>
        <Image
          style={[styles.patternIcon, styles.rectangle1Position]}
          contentFit="cover"
          source={require("../assets/pattern.png")}
        />
      </View>
      <View style={[styles.buttonwhite1, styles.buttonwhitePosition]}>
        <LinearGradient
          style={[styles.rectangle1, styles.rectangle1Position]}
          locations={[0, 1]}
          colors={["#b0d45d", "#b0d45d"]}
        />
        <Text style={[styles.title1, styles.titleTypo]}>E-mail</Text>
      </View>
      <View style={[styles.buttonwhite11, styles.buttonwhitePosition]}>
        <LinearGradient
          style={[styles.rectangle1, styles.rectangle1Position]}
          locations={[0, 1]}
          colors={["#b0d45d", "#b0d45d"]}
        />
        <Text style={[styles.title2, styles.titleTypo]}>Contacts</Text>
      </View>
      <View style={[styles.statsIcon, styles.iconLayout]}>
        <Image
          style={styles.image13Icon}
          contentFit="cover"
          source={require("../assets/image-132.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 20,
    width: 20,
  },
  personalFramePosition: {
    width: 375,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    height: 403,
    width: 287,
    position: "absolute",
  },
  rectangle1Position: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  buttonwhitePosition: {
    width: 287,
    left: 44,
    position: "absolute",
  },
  titleTypo: {
    color: Color.white,
    fontFamily: FontFamily.montserratRegular,
    top: "50%",
    fontSize: FontSize.title1_size,
    textAlign: "center",
    position: "absolute",
  },
  materialSymbolshomeOutlineIcon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  faSolidwalkingIcon: {
    width: 14,
    height: 23,
    marginLeft: 64,
    overflow: "hidden",
  },
  trophyIcon: {
    marginLeft: 64,
  },
  iconamoonprofileFill: {
    width: 21,
    height: 21,
    marginLeft: 64,
    overflow: "hidden",
  },
  icon: {
    top: 10,
    left: 28,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  tabBar: {
    top: 730,
    left: 24,
    borderRadius: Border.br_base,
    shadowColor: "rgba(46, 49, 118, 0.1)",
    shadowRadius: 28,
    elevation: 28,
    width: 327,
    height: 46,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    position: "absolute",
    overflow: "hidden",
  },
  avatarIcon: {
    top: 101,
    left: 145,
    width: 84,
    height: 84,
    position: "absolute",
  },
  name: {
    top: 189,
    left: 167,
    fontSize: FontSize.size_mid,
    letterSpacing: 0.2,
    textAlign: "center",
    color: Color.lightGrey,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    position: "absolute",
  },
  title: {
    top: 60,
    left: 165,
    letterSpacing: 0.1,
    fontSize: FontSize.title1_size,
    textAlign: "center",
    color: Color.lightGrey,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    position: "absolute",
  },
  iconexlightedit1: {
    top: 56,
    left: 327,
    width: 24,
    height: 24,
    opacity: 0.7,
    position: "absolute",
  },
  personalFrame: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.yellowgreen,
    height: 291,
    overflow: "hidden",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeIndicator: {
    top: 780,
    height: 32,
    width: 375,
    left: 0,
    position: "absolute",
  },
  statusBarIcon: {
    height: 44,
  },
  groupChild: {
    borderRadius: Border.br_5xl,
    shadowColor: "rgba(0, 0, 0, 0.16)",
    shadowRadius: 30,
    elevation: 30,
    height: 403,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
  },
  kd08cs2006: {
    marginTop: 132.66,
    width: "74.4%",
    left: "12.98%",
    fontSize: 24,
    fontFamily: FontFamily.montserratSemibold,
    color: Color.midnightblue_100,
    top: "50%",
    height: 32,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  rectangle: {
    height: "13.87%",
    width: "82.06%",
    top: "79.75%",
    right: "8.97%",
    bottom: "6.38%",
    left: "8.97%",
    borderRadius: Border.br_5xs,
    borderStyle: "solid",
    borderColor: "#c7c7cc",
    borderWidth: 1,
    opacity: 0.5,
    position: "absolute",
  },
  yourInvitationCode: {
    marginTop: 89.05,
    width: "64.9%",
    left: "17.41%",
    fontSize: FontSize.size_lg,
    color: "rgba(61, 0, 62, 0.3)",
    height: 18,
    fontFamily: FontFamily.montserratRegular,
    top: "50%",
    textAlign: "center",
    position: "absolute",
  },
  patternIcon: {
    height: "77.11%",
    width: "81.96%",
    right: "18.04%",
    bottom: "22.89%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleParent: {
    top: 236,
    left: 44,
    height: 403,
  },
  rectangle1: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_16xl,
    backgroundColor: Color.gradientsG900DarkAccent,
    width: "100%",
  },
  title1: {
    marginTop: -7,
    left: "41.97%",
  },
  buttonwhite1: {
    top: 654,
    height: 30,
  },
  title2: {
    marginTop: -6.5,
    left: "39.18%",
  },
  buttonwhite11: {
    top: 692,
    height: 29,
  },
  image13Icon: {
    top: -59,
    left: -28,
    width: 149,
    height: 149,
    position: "absolute",
  },
  statsIcon: {
    top: 383,
    left: 139,
    position: "absolute",
  },
  sendLink: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.lightGrey,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default SendLink;

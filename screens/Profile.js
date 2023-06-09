import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, Border, FontSize, FontFamily, Padding } from "../GlobalStyles";

export const ProfileScreen = () => {
  return (
    <View style={styles.profile}>
      <View style={[styles.tabBar, styles.tabLayout]}>
        <View style={[styles.icon, styles.iconFlexBox]}>
          <Image
            style={styles.materialSymbolshomeOutlineIcon}
            contentFit="cover"
            source={require("../assets/materialsymbolshomeoutline.png")}
          />
          <Image
            style={styles.faSolidwalkingIcon}
            contentFit="cover"
            source={require("../assets/fasolidwalking1.png")}
          />
          <Image
            style={styles.trophyIcon}
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
      <View style={[styles.settings, styles.tabBarShadowBox]}>
        <View style={styles.parametersParent}>
          <View style={styles.achivmentLayout}>
            <Image
              style={[styles.raisingHandIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/raising-hand.png")}
            />
            <Text
              style={[styles.personalParameters, styles.totalProgressFlexBox]}
            >
              Personal parameters
            </Text>
            <Image
              style={[
                styles.iconexlightright2,
                styles.iconexlightedit1Position,
              ]}
              contentFit="cover"
              source={require("../assets/iconexlightright-2.png")}
            />
          </View>
          <View style={[styles.divider, styles.dividerBg]} />
          <View style={[styles.achivment, styles.achivmentLayout]}>
            <Image
              style={[styles.raisingHandIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/trophy1.png")}
            />
            <Text
              style={[styles.personalParameters, styles.totalProgressFlexBox]}
            >
              Achievements
            </Text>
            <Image
              style={[
                styles.iconexlightright2,
                styles.iconexlightedit1Position,
              ]}
              contentFit="cover"
              source={require("../assets/iconexlightright-2.png")}
            />
          </View>
          <View style={[styles.divider, styles.dividerBg]} />
          <View style={[styles.achivment, styles.achivmentLayout]}>
            <Image
              style={[styles.raisingHandIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/gear.png")}
            />
            <Text
              style={[styles.personalParameters, styles.totalProgressFlexBox]}
            >
              Settings
            </Text>
            <Image
              style={[
                styles.iconexlightright2,
                styles.iconexlightedit1Position,
              ]}
              contentFit="cover"
              source={require("../assets/iconexlightright-2.png")}
            />
          </View>
          <View style={[styles.divider, styles.dividerBg]} />
          <View style={[styles.achivment, styles.achivmentLayout]}>
            <Text
              style={[styles.personalParameters, styles.totalProgressFlexBox]}
            >
              Invite friends
            </Text>
            <Image
              style={[
                styles.iconexlightright2,
                styles.iconexlightedit1Position,
              ]}
              contentFit="cover"
              source={require("../assets/iconexlightright-2.png")}
            />
            <Image
              style={[styles.emojiIcon, styles.iconLayout2]}
              contentFit="cover"
              source={require("../assets/emoji2.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.personalFrame, styles.personalFramePosition]}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/avatar1.png")}
        />
        <Text style={[styles.name, styles.nameFlexBox]}>Oren</Text>
        <Text style={[styles.title, styles.titleTypo]}>Profile</Text>
        <Image
          style={[styles.iconexlightedit1, styles.iconexlightedit1Position]}
          contentFit="cover"
          source={require("../assets/iconexlightedit-1.png")}
        />
      </View>
      <View style={[styles.progressTab, styles.tabBorder]}>
        <Image
          style={[styles.bgIcon, styles.bgIconPosition]}
          contentFit="cover"
          source={require("../assets/bg.png")}
        />
        <View style={[styles.statsTab, styles.statsTabPosition]}>
          <View style={[styles.distance, styles.timeLayout]}>
            <Text style={[styles.km, styles.kmTypo]}>km</Text>
            <Text style={[styles.text, styles.textTypo]}>103,2</Text>
            <View style={[styles.statsIcon, styles.iconLayout1]}>
              <Image
                style={[styles.image13Icon, styles.iconLayout1]}
                contentFit="cover"
                source={require("../assets/image-131.png")}
              />
            </View>
          </View>
          <View style={[styles.divider3, styles.dividerBg]} />
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={[styles.hr, styles.kmTypo]}>hr</Text>
            <View style={styles.statsIcon1}>
              <Image
                style={[styles.f1Fe0fStopwatchB1, styles.iconLayout2]}
                contentFit="cover"
                source={require("../assets/23f1-fe0f-stopwatch-b-1.png")}
              />
            </View>
            <Text style={[styles.text1, styles.textTypo]}>16,9</Text>
          </View>
          <View style={[styles.divider3, styles.dividerBg]} />
          <View style={[styles.time, styles.timeLayout]}>
            <Text style={[styles.kcal, styles.kmTypo]}>kcal</Text>
            <Text style={[styles.k, styles.textTypo]}>1,5k</Text>
            <View style={[styles.statsIcon2, styles.iconLayout]}>
              <Image
                style={[styles.image9Icon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/image-91.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.subtitle, styles.statsTabPosition]}>
          <Text style={[styles.totalProgress, styles.titleTypo]}>
            Total progress
          </Text>
          <Image
            style={styles.iconexlightright24}
            contentFit="cover"
            source={require("../assets/iconexlightright-21.png")}
          />
        </View>
      </View>
      <View style={[styles.homeIndicator, styles.personalFramePosition]}>
        <View style={styles.homeIndicator1} />
      </View>
      <Image
        style={[styles.statusBarIcon, styles.personalFramePosition]}
        contentFit="cover"
        source={require("../assets/status-bar2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabLayout: {
    width: 327,
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    left: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iconFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  tabBarShadowBox: {
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
  },
  iconLayout2: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  totalProgressFlexBox: {
    textAlign: "left",
    color: Color.dark,
  },
  iconexlightedit1Position: {
    opacity: 0.7,
    position: "absolute",
  },
  dividerBg: {
    opacity: 0.1,
    backgroundColor: Color.dark,
  },
  achivmentLayout: {
    height: 48,
    width: 287,
    overflow: "hidden",
  },
  personalFramePosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  nameFlexBox: {
    textAlign: "center",
    color: Color.lightGrey,
    left: 165,
  },
  titleTypo: {
    fontSize: FontSize.title1_size,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    letterSpacing: 0.1,
    position: "absolute",
  },
  tabBorder: {
    borderColor: "#b0d45d",
    borderStyle: "solid",
  },
  bgIconPosition: {
    left: 0,
    top: 0,
  },
  statsTabPosition: {
    left: 20,
    position: "absolute",
  },
  timeLayout: {
    height: 60,
    overflow: "hidden",
  },
  kmTypo: {
    textAlign: "right",
    fontFamily: FontFamily.caption,
    fontSize: FontSize.caption_size,
    top: 39,
    opacity: 0.7,
    color: Color.dark,
    letterSpacing: 0.1,
    position: "absolute",
  },
  textTypo: {
    top: 16,
    textAlign: "right",
    letterSpacing: 0.2,
    fontSize: FontSize.size_mid,
    color: Color.dark,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    position: "absolute",
  },
  iconLayout1: {
    height: 40,
    position: "absolute",
  },
  iconLayout: {
    width: 40,
    height: 40,
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
    height: 20,
    width: 20,
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
    position: "absolute",
  },
  tabBar: {
    top: 730,
    height: 46,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
  },
  raisingHandIcon: {
    height: "66.67%",
    width: "11.15%",
    top: "16.67%",
    right: "88.85%",
    bottom: "16.67%",
    left: "0%",
  },
  personalParameters: {
    left: "16.72%",
    fontSize: FontSize.title3_size,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    letterSpacing: 0.1,
    color: Color.dark,
    top: "33.33%",
    position: "absolute",
  },
  iconexlightright2: {
    height: "33.33%",
    width: "5.57%",
    right: "0%",
    bottom: "33.33%",
    left: "94.43%",
    top: "33.33%",
    opacity: 0.7,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  divider: {
    width: 200,
    height: 1,
    marginTop: 8,
  },
  achivment: {
    marginTop: 8,
  },
  emojiIcon: {
    height: "51.16%",
    width: "9.06%",
    top: "25%",
    right: "89.9%",
    bottom: "23.84%",
    left: "1.05%",
  },
  parametersParent: {
    alignItems: "center",
  },
  settings: {
    top: 426,
    padding: 20,
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    left: 24,
    shadowOpacity: 1,
    elevation: 28,
    shadowRadius: 28,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(46, 49, 118, 0.1)",
    position: "absolute",
    overflow: "hidden",
  },
  avatarIcon: {
    top: 101,
    left: 134,
    width: 105,
    height: 112,
    position: "absolute",
  },
  name: {
    top: 221,
    letterSpacing: 0.2,
    fontSize: FontSize.size_mid,
    textAlign: "center",
    color: Color.lightGrey,
    left: 165,
    fontFamily: FontFamily.title1,
    fontWeight: "600",
    position: "absolute",
  },
  title: {
    top: 60,
    textAlign: "center",
    color: Color.lightGrey,
    left: 165,
    fontSize: FontSize.title1_size,
  },
  iconexlightedit1: {
    top: 56,
    left: 327,
    width: 24,
    height: 24,
  },
  personalFrame: {
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.yellowgreen,
    height: 291,
    top: 0,
    overflow: "hidden",
  },
  bgIcon: {
    width: 559,
    height: 198,
    opacity: 0.25,
    position: "absolute",
  },
  km: {
    left: 56,
  },
  text: {
    left: 25,
  },
  image13Icon: {
    left: 16,
    top: 0,
    width: 20,
  },
  statsIcon: {
    left: -16,
    width: 33,
    top: 14,
  },
  distance: {
    width: 76,
  },
  divider3: {
    width: 1,
    marginLeft: 8,
    height: 44,
  },
  hr: {
    left: 65,
  },
  f1Fe0fStopwatchB1: {
    height: "100%",
    width: "117.65%",
    top: "0%",
    right: "-55.88%",
    bottom: "0%",
    left: "38.24%",
  },
  statsIcon1: {
    top: 18,
    width: 34,
    height: 36,
    left: -13,
    position: "absolute",
  },
  text1: {
    left: 40,
  },
  time: {
    width: 80,
    marginLeft: 8,
  },
  kcal: {
    left: 54,
  },
  k: {
    left: 42,
  },
  image9Icon: {
    left: 13,
    top: 0,
  },
  statsIcon2: {
    left: -13,
    top: 14,
  },
  statsTab: {
    top: 57,
    borderRadius: Border.br_5xs,
    borderWidth: 1,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_9xs,
    borderColor: "#b0d45d",
    borderStyle: "solid",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Color.lightGrey,
  },
  totalProgress: {
    left: 0,
    top: 0,
    textAlign: "left",
    color: Color.dark,
  },
  iconexlightright24: {
    top: 1,
    left: 266,
    width: 16,
    height: 16,
    opacity: 0.9,
    position: "absolute",
  },
  subtitle: {
    top: 28,
    width: 282,
    height: 18,
  },
  progressTab: {
    top: 253,
    borderWidth: 3,
    height: 145,
    width: 327,
    backgroundColor: Color.white,
    borderRadius: Border.br_base,
    left: 24,
    position: "absolute",
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
  },
  statusBarIcon: {
    height: 44,
    top: 0,
  },
  profile: {
    borderRadius: Border.br_13xl,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
    backgroundColor: Color.lightGrey,
  },
});


import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const FrameScreen = () => {
  return (
    <View style={styles.mainScreenParent}>
      <View style={[styles.mainScreen, styles.mainScreenLayout]}>
        <View style={[styles.personalFrame, styles.mainScreenLayout]}>
          <Image
            style={styles.avatarIcon}
            contentFit="cover"
            source={require("../assets/avatar.png")}
          />
          <Text style={styles.name}>Oren</Text>
          <View style={[styles.iconexlightedit1, styles.iconLayout]} />
        </View>
        <View style={styles.tabBar}>
          <View style={[styles.icon, styles.parentFlexBox]}>
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
              source={require("../assets/trophy.png")}
            />
            <Image
              style={styles.iconamoonprofileFill}
              contentFit="cover"
              source={require("../assets/iconamoonprofilefill.png")}
            />
          </View>
        </View>
        <View style={[styles.homeIndicator, styles.mainScreenLayout]}>
          <View
            style={[styles.homeIndicator1, styles.homeIndicator1Position]}
          />
        </View>
        <View style={[styles.body, styles.bodyLayout]} />
        <View style={styles.frameParent}>
          <View style={styles.trendingPrizesParent}>
            <Text
              style={[styles.trendingPrizes, styles.leaderboardTypo]}
            >{`Trending prizes `}</Text>
            <Image
              style={[styles.arrowIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/arrow.png")}
            />
          </View>
          <LinearGradient
            style={styles.routeCardsParent}
            locations={[0, 1]}
            colors={["rgba(35, 44, 46, 0.5)", "rgba(47, 57, 60, 0.4)"]}
          >
            <View>
              <Image
                style={styles.routeCardsChild}
                contentFit="cover"
                source={require("../assets/frame-1000001047.png")}
              />
              <View style={styles.frameGroup}>
                <View style={styles.railyardBikeParkParent}>
                  <Text style={[styles.railyardBikePark, styles.miTypo]}>
                    Rebar
                  </Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-125.png")}
                  />
                  <Text style={[styles.mi, styles.miClr]}>20mi</Text>
                </View>
                <Text style={[styles.thornridgeCirShiloh, styles.text1Typo]}>
                  1901 Thornridge Cir. Shiloh, Tel Aviv, 81063
                </Text>
              </View>
              <View style={styles.ratingParent}>
                <Image
                  style={[styles.ratingIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rating.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>{`4.8 `}</Text>
                  <Text style={[styles.text1, styles.textTypo]}>(93)</Text>
                </View>
              </View>
            </View>
            <View style={styles.routeCards1}>
              <Image
                style={styles.routeCardsChild}
                contentFit="cover"
                source={require("../assets/frame-10000010471.png")}
              />
              <View style={styles.frameGroup}>
                <View style={styles.railyardBikeParkParent}>
                  <Text style={[styles.railyardBikePark, styles.miTypo]}>
                    Aroma Coffee
                  </Text>
                  <Image
                    style={styles.frameChild}
                    contentFit="cover"
                    source={require("../assets/ellipse-1251.png")}
                  />
                  <Text style={[styles.mi1, styles.textTypo]}>20mi</Text>
                </View>
                <Text style={[styles.thornridgeCirShiloh, styles.text1Typo]}>
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </Text>
              </View>
              <View style={styles.ratingParent}>
                <Image
                  style={[styles.ratingIcon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/rating.png")}
                />
                <View style={styles.parent}>
                  <Text style={[styles.text, styles.textTypo]}>{`4.5 `}</Text>
                  <Text style={[styles.text1, styles.textTypo]}>(13)</Text>
                </View>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={[styles.stepperParent, styles.bodyLayout]}>
          <View style={styles.stepper}>
            <Image
              style={styles.stepperChild}
              contentFit="cover"
              source={require("../assets/rectangle-2.png")}
            />
            <Image
              style={[styles.stepperItem, styles.frameInnerLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
            <Image
              style={[styles.stepperItem, styles.frameInnerLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-1.png")}
            />
          </View>
          <LinearGradient
            style={[styles.groupChild, styles.groupPosition]}
            locations={[0, 1]}
            colors={["rgba(35, 44, 46, 0.5)", "rgba(47, 57, 60, 0.4)"]}
          />
          <View style={styles.yourPrizesParent}>
            <Text style={[styles.trendingPrizes, styles.leaderboardTypo]}>
              Your Prizes
            </Text>
            <View style={styles.groupView}>
              <View style={styles.cyclingParent}>
                <Text style={[styles.cycling, styles.kmTypo]}>
                  Golda ice cream
                </Text>
                <Image
                  style={[styles.frameInner, styles.frameInnerLayout]}
                  contentFit="cover"
                  source={require("../assets/ellipse-1252.png")}
                />
                <Text style={[styles.km, styles.kmTypo]}>1km</Text>
              </View>
              <Image
                style={[styles.groupItem, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/group-34741.png")}
              />
              <Image
                style={[styles.filledArrowIcon, styles.groupItemLayout]}
                contentFit="cover"
                source={require("../assets/filled-arrow.png")}
              />
            </View>
          </View>
        </View>
        <Text style={[styles.leaderboard, styles.leaderboardTypo]}>
          Leaderboard
        </Text>
        <View style={[styles.detailsWrapper, styles.detailsLayout]}>
          <LinearGradient
            style={[styles.details, styles.detailsLayout]}
            locations={[0, 1]}
            colors={["rgba(14, 17, 18, 0.5)", "rgba(23, 31, 33, 0.5)"]}
          >
            <View style={[styles.frameView, styles.frameFlexBox]}>
              <View style={styles.lengthParent}>
                <Text style={[styles.length, styles.kmTypo]}>Length</Text>
                <Text style={[styles.mi2, styles.textTypo]}>20mi</Text>
              </View>
              <View style={styles.lineView} />
              <View style={styles.parentFlexBox}>
                <Text style={[styles.length, styles.kmTypo]}>
                  Elevation Gain
                </Text>
                <Text style={[styles.mi2, styles.textTypo]}>151m</Text>
              </View>
              <View style={styles.lineView} />
              <View style={styles.movingTimeParent}>
                <Text style={[styles.length, styles.kmTypo]}>Moving Time</Text>
                <Text style={[styles.mi2, styles.textTypo]}>1:33:21</Text>
              </View>
            </View>
            <View style={[styles.frameParent1, styles.frameFlexBox]}>
              <View style={styles.movingTimeParent}>
                <Text style={[styles.length, styles.kmTypo]}>Avg Pace</Text>
                <Text style={[styles.mi2, styles.textTypo]}>4:24</Text>
              </View>
              <View style={styles.lineView} />
              <View style={[styles.caloriesParent, styles.parentFlexBox]}>
                <Text style={[styles.length, styles.kmTypo]}>Calories</Text>
                <Text style={[styles.mi2, styles.textTypo]}>1,328</Text>
              </View>
              <View style={styles.lineView} />
              <View style={styles.movingTimeParent}>
                <Text style={[styles.length, styles.kmTypo]}>Total Time</Text>
                <Text style={[styles.mi2, styles.textTypo]}>1:33</Text>
              </View>
            </View>
          </LinearGradient>
        </View>
        <View style={[styles.mainScreenChild, styles.mainShadowBox]} />
        <View style={[styles.mainScreenItem, styles.mainShadowBox]} />
        <View style={[styles.mainScreenInner, styles.mainShadowBox]} />
        <Text style={[styles.points, styles.pointsLayout]}>1098 Points</Text>
        <Text style={[styles.points1, styles.text10Typo]}>1098 Points</Text>
        <Text style={[styles.points2, styles.points2Typo]}>1098 Points</Text>
        <Text
          style={styles.jakePeralta}
        >{`Jake Peralta                                             `}</Text>
        <Image
          style={styles.polygonIcon}
          contentFit="cover"
          source={require("../assets/polygon-1.png")}
        />
        <Image
          style={[styles.mainScreenChild1, styles.mainChildLayout1]}
          contentFit="cover"
          source={require("../assets/polygon-2.png")}
        />
        <Image
          style={[styles.mainScreenChild2, styles.text9Position]}
          contentFit="cover"
          source={require("../assets/polygon-3.png")}
        />
        <Text style={[styles.text8, styles.textLayout]}>3</Text>
        <Image
          style={[styles.ellipseIcon, styles.mainChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-4.png")}
        />
        <Text
          style={[styles.rossGeller, styles.gellerLayout1]}
        >{`Ross Geller                                             `}</Text>
        <Text style={[styles.text9, styles.textLayout1]}>5</Text>
        <Image
          style={[styles.mainScreenChild3, styles.mainChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-6.png")}
        />
        <Text
          style={[styles.monicaGeller, styles.gellerLayout]}
        >{`Monica Geller                                             `}</Text>
        <Text style={[styles.text10, styles.textLayout]}>4</Text>
        <Image
          style={[styles.mainScreenChild4, styles.mainChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-5.png")}
        />
        <View style={[styles.rectangleView, styles.mainShadowBox]} />
        <View style={styles.mainScreenChild5} />
        <Text style={[styles.points3, styles.pointsPosition]}>1098 Points</Text>
        <Text style={[styles.points4, styles.text11Typo]}>1098 Points</Text>
        <Image
          style={[styles.mainScreenChild6, styles.mainChildPosition1]}
          contentFit="cover"
          source={require("../assets/polygon-2.png")}
        />
        <Image
          style={[styles.mainScreenChild7, styles.mainChildPosition1]}
          contentFit="cover"
          source={require("../assets/polygon-3.png")}
        />
        <Text
          style={[styles.dinGeller, styles.text11Typo]}
        >{`Din Geller                                             `}</Text>
        <Text style={[styles.text11, styles.text11Typo]}>2</Text>
        <Image
          style={[styles.mainScreenChild8, styles.mainChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-126.png")}
        />
        <Text
          style={[styles.miriGeller, styles.text12Typo]}
        >{`Miri Geller                                             `}</Text>
        <Text style={[styles.text12, styles.text12Typo]}>1</Text>
        <Image
          style={[styles.mainScreenChild9, styles.mainChildPosition]}
          contentFit="cover"
          source={require("../assets/ellipse-127.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainScreenLayout: {
    width: 375,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
  },
  parentFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  homeIndicator1Position: {
    left: "50%",
    position: "absolute",
  },
  bodyLayout: {
    width: 390,
    position: "absolute",
  },
  leaderboardTypo: {
    fontFamily: FontFamily.montserratBold,
    fontWeight: "700",
    fontSize: FontSize.size_13xl,
  },
  miTypo: {
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 19,
    fontSize: FontSize.size_base,
  },
  miClr: {
    color: Color.whitesmoke,
    textAlign: "left",
  },
  text1Typo: {
    fontSize: FontSize.title3_size,
    lineHeight: 16,
  },
  textTypo: {
    fontFamily: FontFamily.montserratThinItalic,
    fontWeight: "100",
    fontStyle: "italic",
  },
  frameInnerLayout: {
    width: 8,
    height: 8,
  },
  groupPosition: {
    left: "0%",
    width: "100%",
  },
  kmTypo: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
  },
  groupItemLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    right: "0%",
    overflow: "hidden",
    position: "absolute",
  },
  detailsLayout: {
    height: 146,
    width: 334,
  },
  frameFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mainShadowBox: {
    height: 27,
    width: 326,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    position: "absolute",
  },
  pointsLayout: {
    width: 58,
    left: 265,
    textAlign: "left",
  },
  text10Typo: {
    top: 559,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  points2Typo: {
    top: 590,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  mainChildLayout1: {
    width: 12,
    left: 331,
  },
  text9Position: {
    top: 589,
    position: "absolute",
  },
  textLayout: {
    height: 11,
    width: 6,
    left: 39,
    textAlign: "center",
  },
  mainChildLayout: {
    width: 22,
    height: 21,
  },
  gellerLayout1: {
    width: 62,
    height: 11,
    left: 88,
    textAlign: "left",
  },
  textLayout1: {
    width: 6,
    left: 39,
    height: 12,
    textAlign: "center",
  },
  gellerLayout: {
    width: 67,
    height: 10,
    left: 88,
    textAlign: "left",
  },
  pointsPosition: {
    left: 264,
    width: 58,
    textAlign: "left",
  },
  text11Typo: {
    top: 493,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  mainChildPosition1: {
    left: 330,
    width: 12,
    position: "absolute",
  },
  mainChildPosition: {
    left: 56,
    position: "absolute",
  },
  text12Typo: {
    top: 462,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  avatarIcon: {
    top: 49,
    left: 122,
    width: 130,
    height: 136,
    position: "absolute",
  },
  name: {
    top: 189,
    left: 167,
    fontSize: FontSize.size_mid,
    letterSpacing: 0.2,
    fontWeight: "600",
    fontFamily: FontFamily.title1,
    color: Color.lightGrey,
    textAlign: "center",
    position: "absolute",
  },
  iconexlightedit1: {
    top: 56,
    left: 327,
    opacity: 0.7,
    position: "absolute",
  },
  personalFrame: {
    top: -6,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    height: 291,
    overflow: "hidden",
    backgroundColor: Color.yellowgreen,
    width: 375,
    left: 0,
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
    width: 20,
    height: 20,
    marginLeft: 64,
  },
  iconamoonprofileFill: {
    height: 21,
    width: 21,
    marginLeft: 64,
    overflow: "hidden",
  },
  icon: {
    top: 10,
    left: 28,
    flexDirection: "row",
    position: "absolute",
  },
  tabBar: {
    top: 1416,
    left: 22,
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
    overflow: "hidden",
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: -66.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.black,
    width: 134,
    height: 5,
  },
  homeIndicator: {
    top: 1467,
    left: -2,
    height: 30,
  },
  body: {
    top: 1052,
    left: 0,
    width: 390,
  },
  trendingPrizes: {
    lineHeight: 38,
    width: 298,
    textAlign: "left",
    color: Color.neutralsB100White,
  },
  arrowIcon: {
    marginLeft: 20,
  },
  trendingPrizesParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  routeCardsChild: {
    height: 170,
    width: 223,
  },
  railyardBikePark: {
    textAlign: "left",
    color: Color.neutralsB100White,
  },
  frameChild: {
    width: 4,
    height: 4,
    marginLeft: 12,
  },
  mi: {
    marginLeft: 12,
    fontFamily: FontFamily.montserratRegular,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    flex: 1,
    color: Color.whitesmoke,
  },
  railyardBikeParkParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  thornridgeCirShiloh: {
    fontWeight: "300",
    fontFamily: FontFamily.montserratLight,
    marginTop: 4,
    color: Color.white,
    lineHeight: 16,
    alignSelf: "stretch",
    textAlign: "left",
  },
  frameGroup: {
    marginTop: 12,
    width: 223,
  },
  ratingIcon: {
    overflow: "hidden",
  },
  text: {
    lineHeight: 20,
    fontSize: FontSize.title1_size,
    fontWeight: "100",
    fontStyle: "italic",
    color: Color.whitesmoke,
    textAlign: "left",
  },
  text1: {
    color: Color.gray_100,
    marginLeft: 4,
    lineHeight: 16,
    fontSize: FontSize.title3_size,
    textAlign: "left",
  },
  parent: {
    marginLeft: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  ratingParent: {
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
  },
  mi1: {
    color: Color.whitesmoke,
    textAlign: "left",
    marginLeft: 12,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    flex: 1,
  },
  routeCards1: {
    marginLeft: 12,
  },
  routeCardsParent: {
    borderRadius: Border.br_5xl,
    paddingHorizontal: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingBottom: 24,
    marginTop: 24,
    backgroundColor: Color.gradientsG900DarkAccent,
    flexDirection: "row",
  },
  frameParent: {
    top: 1012,
    left: 24,
    position: "absolute",
  },
  stepperChild: {
    borderRadius: 99,
    width: 32,
    height: 8,
  },
  stepperItem: {
    marginLeft: 8,
  },
  stepper: {
    top: 327,
    left: 140,
    alignItems: "flex-end",
    flexDirection: "row",
    position: "absolute",
  },
  groupChild: {
    height: "74.05%",
    top: "14.33%",
    bottom: "11.61%",
    borderTopLeftRadius: Border.br_5xl,
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    right: "0%",
    left: "0%",
    backgroundColor: Color.gradientsG900DarkAccent,
    position: "absolute",
  },
  cycling: {
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: "left",
    color: Color.neutralsB100White,
  },
  frameInner: {
    marginLeft: 12,
  },
  km: {
    color: Color.white,
    marginLeft: 12,
    lineHeight: 19,
    fontSize: FontSize.size_base,
    textAlign: "left",
  },
  cyclingParent: {
    height: "8.85%",
    width: "38.01%",
    top: "91.15%",
    right: "59.65%",
    left: "2.34%",
    bottom: "0%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  groupItem: {
    height: "82.3%",
    top: "0%",
    bottom: "17.7%",
    left: "0%",
    width: "100%",
  },
  filledArrowIcon: {
    height: "24.78%",
    width: "16.37%",
    top: "75.22%",
    left: "83.63%",
    bottom: "0%",
  },
  groupView: {
    width: 342,
    height: 226,
    marginTop: 24,
  },
  yourPrizesParent: {
    left: 16,
    top: 0,
    position: "absolute",
  },
  stepperParent: {
    top: 639,
    height: 335,
    left: 25,
  },
  leaderboard: {
    top: 409,
    left: 38,
    color: Color.white,
    lineHeight: 16,
    textAlign: "center",
    position: "absolute",
  },
  length: {
    color: Color.neutralsB500Grey,
    lineHeight: 16,
    fontSize: FontSize.title3_size,
    textAlign: "center",
  },
  mi2: {
    lineHeight: 20,
    fontSize: FontSize.title1_size,
    fontWeight: "100",
    fontStyle: "italic",
    marginTop: 4,
    color: Color.neutralsB100White,
    textAlign: "center",
  },
  lengthParent: {
    width: 81,
    alignItems: "center",
  },
  lineView: {
    borderStyle: "solid",
    borderColor: "rgba(108, 108, 108, 0.2)",
    borderRightWidth: 1,
    width: 1,
    height: 48,
  },
  movingTimeParent: {
    alignItems: "center",
  },
  frameView: {
    top: 20,
    width: 294,
    left: 24,
  },
  caloriesParent: {
    width: 53,
  },
  frameParent1: {
    top: 83,
    width: 280,
    left: 38,
  },
  details: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.gradientsG900DarkAccent,
  },
  detailsWrapper: {
    marginLeft: -166.5,
    top: 224,
    paddingRight: Padding.p_5xs,
    left: "50%",
    position: "absolute",
  },
  mainScreenChild: {
    top: 517,
    left: 25,
  },
  mainScreenItem: {
    top: 549,
    left: 25,
  },
  mainScreenInner: {
    top: 581,
    left: 25,
  },
  points: {
    height: 7,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    top: 527,
    width: 58,
    left: 265,
    position: "absolute",
  },
  points1: {
    height: 7,
    width: 58,
    left: 265,
    textAlign: "left",
  },
  points2: {
    width: 58,
    left: 265,
    textAlign: "left",
    height: 8,
  },
  jakePeralta: {
    width: 50,
    left: 88,
    top: 526,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    height: 8,
    textAlign: "left",
    position: "absolute",
  },
  polygonIcon: {
    width: 10,
    height: 10,
    left: 331,
    top: 527,
    position: "absolute",
  },
  mainScreenChild1: {
    top: 556,
    height: 13,
    position: "absolute",
  },
  mainScreenChild2: {
    height: 12,
    width: 12,
    left: 331,
  },
  text8: {
    top: 526,
    height: 11,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  ellipseIcon: {
    top: 520,
    left: 57,
    width: 22,
    position: "absolute",
  },
  rossGeller: {
    top: 590,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  text9: {
    top: 589,
    position: "absolute",
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
  },
  mainScreenChild3: {
    top: 584,
    left: 57,
    width: 22,
    position: "absolute",
  },
  monicaGeller: {
    top: 559,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  text10: {
    top: 559,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
  },
  mainScreenChild4: {
    top: 552,
    left: 57,
    width: 22,
    position: "absolute",
  },
  rectangleView: {
    top: 452,
    left: 24,
  },
  mainScreenChild5: {
    top: 484,
    height: 28,
    width: 326,
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_11xl,
    left: 24,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    backgroundColor: Color.white,
    position: "absolute",
  },
  points3: {
    top: 462,
    color: Color.black,
    fontFamily: FontFamily.title2,
    fontSize: FontSize.size_6xs,
    fontWeight: "500",
    position: "absolute",
    height: 7,
  },
  points4: {
    left: 264,
    width: 58,
    textAlign: "left",
    height: 8,
  },
  mainScreenChild6: {
    top: 459,
    height: 13,
  },
  mainScreenChild7: {
    top: 492,
    height: 12,
  },
  dinGeller: {
    width: 62,
    height: 11,
    left: 88,
    textAlign: "left",
  },
  text11: {
    width: 6,
    left: 39,
    height: 12,
    textAlign: "center",
  },
  mainScreenChild8: {
    top: 488,
    height: 22,
    width: 21,
    left: 56,
  },
  miriGeller: {
    width: 67,
    height: 10,
    left: 88,
    textAlign: "left",
  },
  text12: {
    height: 11,
    width: 6,
    left: 39,
    textAlign: "center",
  },
  mainScreenChild9: {
    top: 456,
    width: 22,
    height: 21,
  },
  mainScreen: {
    borderRadius: Border.br_13xl,
    overflow: "hidden",
    backgroundColor: Color.yellowgreen,
    width: 375,
    left: 0,
    top: 0,
    height: 1500,
  },
  mainScreenParent: {
    height: 1500,
    width: "100%",
    flex: 1,
  },
});

export default FrameScreen;

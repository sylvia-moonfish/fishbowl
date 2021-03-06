import AppBar from "@material-ui/core/AppBar";
import Avatar from "@material-ui/core/Avatar";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Chip from "@material-ui/core/Chip";
import Container from "@material-ui/core/Container";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Grid from "@material-ui/core/Grid";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

import CloseIcon from "@material-ui/icons/Close";
import LaunchIcon from "@material-ui/icons/Launch";

import { withRouter } from "next/router";

import React from "react";

import BisCalculations from "../../../../data/5.2/bis-calculations";
import BisItemsCommon from "../../../../data/5.2/bis-items-common";
import BisItemsStr from "../../../../data/5.2/bis-items-str";
import SiteInfo from "../../../../data/site-info";
import PageComponent from "../../../../src/components/page-component";

const transition = React.forwardRef((props, ref) => {
  return <Grow {...props} ref={ref} />;
});

const styles = (theme) => ({
  banner: {
    maxWidth: 128,
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "inherit",
    cursor: "pointer",
    textDecoration: "none",
  },
  noMargin: {
    margin: 0,
  },
});

const pageData = {
  title: "5.2 사무라이 BiS 가이드",
  description: "파이널 판타지 14 패치 5.2 사무라이 BiS 가이드.",
};

const gearSets = [
  {
    type: "5.2bis",
    description: "28 글쿨 로테이션 2.14초 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
    },
    dps: 22665.8,
    gcd: 0,
    shifuGcd: 0,
    foodId: "stuffedHighlandCabbage",
    dh: 0,
    ch: 0,
    rotation: 28,
    dialog: {
      intro:
        "60초 루프 로테이션 내 28 글쿨을 사용 가능한 장비 세트. 가장 사용하기 무난한 추천 세트.",
      gears: [
        {
          itemId: "edenchoirSamuraiBlade",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumTurbanOfStriking",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edenchoirGambisonOfStriking",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edenchoirGauntletsOfStriking",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfStriking",
          materiaIds: ["ch8", "det8"],
        },
        {
          itemId: "augmentedCrystariumPantaloonsOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirSolleretsOfStriking",
          materiaIds: ["det8", "det8"],
        },
        {
          itemId: "edenchoirEarringsOfSlaying",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfSlaying",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edenchoirWristbandOfSlaying",
          materiaIds: ["dh8", "det8"],
        },
        {
          itemId: "edenchoirRingOfSlaying",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfSlaying",
          materiaIds: ["ch8", "det8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "30 글쿨 로테이션 2초 빠른 기시 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
    },
    dps: 22593.11,
    gcd: 0,
    shifuGcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    rotation: 30,
    dialog: {
      intro:
        "60초 루프 로테이션 내 30 글쿨을 사용 가능한 장비 세트. 빠른 기시속을 선호하시는 분들께 추천.",
      gears: [
        {
          itemId: "edenchoirSamuraiBlade",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumTurbanOfStriking",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumCoatOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirGauntletsOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfStriking",
          materiaIds: ["ch8", "det8"],
        },
        {
          itemId: "edenchoirTrousersOfStriking",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "edenchoirSolleretsOfStriking",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "edenchoirEarringsOfSlaying",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfSlaying",
          materiaIds: ["sks8", "sks8"],
        },
        {
          itemId: "edenchoirWristbandOfSlaying",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirRingOfSlaying",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumRingOfSlaying",
          materiaIds: ["ch8", "det8"],
        },
      ],
    },
  },
  {
    type: "5.2bis",
    description: "29 글쿨 로테이션 2.07초 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
    },
    dps: 22469.26,
    gcd: 0,
    shifuGcd: 0,
    foodId: "sausageAndSauerkraut",
    dh: 0,
    ch: 0,
    rotation: 29,
    dialog: {
      intro:
        "60초 루프 로테이션 내 29 글쿨을 사용 가능한 장비 세트. 28 글쿨 세트보다 버프 유지가 수월해 초심자에게 추천.",
      gears: [
        {
          itemId: "edenchoirSamuraiBlade",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumTurbanOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edenchoirGambisonOfStriking",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirGauntletsOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumBeltOfStriking",
          materiaIds: ["ch8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumPantaloonsOfStriking",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumShoesOfStriking",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirEarringsOfSlaying",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "augmentedCrystariumChokerOfSlaying",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirWristbandOfSlaying",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirRingOfSlaying",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumRingOfSlaying",
          materiaIds: ["ch8", "sks8"],
        },
      ],
    },
  },
  {
    type: "ultimate",
    description: "28 글쿨 로테이션 2.14초 절 알렉산더 세트.",
    attributes: {
      main: 0,
      wd: 0,
      ch: 0,
      dh: 0,
      det: 0,
      sks: 0,
    },
    dps: 16158.27,
    gcd: 0,
    shifuGcd: 0,
    foodId: "stuffedHighlandCabbage",
    dh: 0,
    ch: 0,
    rotation: 28,
    dialog: {
      intro: "28 글쿨 절 알렉산더용 장비 세트.",
      gears: [
        {
          itemId: "edengraceBlade",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedDeepshadowHalfmaskOfStriking",
          materiaIds: ["dh8", "sks8"],
        },
        {
          itemId: "edenchoirGambisonOfStriking",
          materiaIds: [],
        },
        {
          itemId: "augmentedDeepshadowGlovesOfStriking",
          materiaIds: ["ch8", "ch8"],
        },
        {
          itemId: "augmentedDeepshadowTassetsOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedCrystariumPantaloonsOfStriking",
          materiaIds: [],
        },
        {
          itemId: "augmentedDeepshadowGreavesOfStriking",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowEarringOfSlaying",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceChokerOfSlaying",
          materiaIds: ["det8", "sks8"],
        },
        {
          itemId: "augmentedDeepshadowBraceletOfSlaying",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "edengraceRingOfSlaying",
          materiaIds: ["dh8", "dh8"],
        },
        {
          itemId: "augmentedDeepshadowRingOfSlaying",
          materiaIds: ["ch8", "det8"],
        },
      ],
    },
  },
];

class Sam extends PageComponent {
  constructor(props) {
    super(props);

    this.state = {
      openedDialog: -1,
    };
  }

  render() {
    const BisItems = {
      ...BisItemsCommon,
      ...BisItemsStr,
    };

    gearSets.forEach((gearSet, gearSetIndex) => {
      gearSet.index = gearSetIndex;
      gearSet.attributes.main = Math.floor(
        Math.floor(
          (BisCalculations.level.main * BisCalculations.sam.str) / 100
        ) +
          BisCalculations.clan.str +
          BisCalculations.trait
      );
      gearSet.attributes.ch = BisCalculations.level.sub;
      gearSet.attributes.dh = BisCalculations.level.sub;
      gearSet.attributes.det = BisCalculations.level.main;
      gearSet.attributes.sks = BisCalculations.level.sub;

      gearSet.dialog.gears.forEach((gear) => {
        if (!BisItems[gear.itemId]) {
          console.log(gear.itemId);
          return;
        }

        if (BisItems[gear.itemId].stats.wd) {
          gearSet.attributes.wd = BisItems[gear.itemId].stats.wd;
        }

        const attributes = Object.keys(BisItems[gear.itemId].stats)
          .filter((key) => {
            return key !== "wd";
          })
          .map((key) => {
            return {
              key: key,
              value: BisItems[gear.itemId].stats[key],
            };
          });

        attributes.sort((a, b) => {
          return b.value - a.value;
        });

        const subAttrMax = attributes[1].value;

        const attributeObj = {};

        attributes.forEach((attr) => {
          attributeObj[attr.key] = attr.value;
        });

        gear.materiaIds.forEach((materiaId) => {
          if (!BisItems[materiaId]) {
            console.log(materiaId);
            return;
          }

          Object.keys(BisItems[materiaId].stats).forEach((key) => {
            if (!attributeObj[key]) {
              attributeObj[key] = BisItems[materiaId].stats[key];
            } else {
              attributeObj[key] += BisItems[materiaId].stats[key];
            }

            if (attributeObj[key] && attributeObj[key] > subAttrMax) {
              attributeObj[key] = subAttrMax;
            }
          });
        });

        Object.keys(attributeObj).forEach((key) => {
          if (!gearSet.attributes[key]) {
            gearSet.attributes[key] = attributeObj[key];
          } else {
            gearSet.attributes[key] += attributeObj[key];
          }
        });
      });

      if (!BisItems[gearSet.foodId]) {
        console.log(gearSet.foodId);
        return;
      }

      Object.keys(BisItems[gearSet.foodId].stats).forEach((key) => {
        if (!gearSet.attributes[key]) return;

        let value = Math.floor(
          (gearSet.attributes[key] *
            BisItems[gearSet.foodId].stats[key].value) /
            100
        );
        if (value > BisItems[gearSet.foodId].stats[key].max)
          value = BisItems[gearSet.foodId].stats[key].max;

        gearSet.attributes[key] += value;
      });

      const gcd1 = Math.floor(
        ((2000 -
          Math.floor(
            ((gearSet.attributes.sks - BisCalculations.level.sub) * 130) /
              BisCalculations.level.div +
              1000
          )) *
          2500) /
          1000
      );
      gearSet.gcd = Math.floor(gcd1 / 10) / 100;

      const gcd2 = 100 - 13;
      const gcd4 = Math.floor((gcd1 * gcd2) / 100);
      gearSet.shifuGcd = Math.floor(gcd4 / 10) / 100;

      gearSet.ch =
        Math.floor(
          ((gearSet.attributes.ch - BisCalculations.level.sub) * 200) /
            BisCalculations.level.div +
            50
        ) / 10;
      gearSet.dh =
        Math.floor(
          ((gearSet.attributes.dh - BisCalculations.level.sub) * 550) /
            BisCalculations.level.div
        ) / 10;
    });

    return (
      <React.Fragment>
        {this.generateHead(
          pageData.title + " | " + SiteInfo.siteTitle,
          pageData.description
        )}
        <Grid container direction="column" spacing={5}>
          <Grid item>
            <Breadcrumbs>
              <Link
                className={this.props.classes.link}
                color="inherit"
                onClick={() => {
                  this.props.router.push("/5.2/guide/bis-guide");
                }}
              >
                5.2 BiS 가이드
              </Link>
              <Typography color="textPrimary">{pageData.title}</Typography>
            </Breadcrumbs>
          </Grid>
          <Grid item>
            <Container maxWidth="md">
              <Grid container direction="column" spacing={5}>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                  >
                    <Grid item>
                      <Typography variant="h5">{pageData.title}</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    alignItems="center"
                    container
                    direction="row"
                    justify="center"
                  >
                    <Grid item>
                      <img
                        alt=""
                        className={this.props.classes.banner}
                        src="/icons/job-crystals/sam.png"
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="body1">
                    패치 5.2 기준 사무라이의 Best-in-Slot 장비 세트 목록입니다.
                    아래 표에서 열람하고자 하는 세트 목록을 클릭해주세요.
                  </Typography>
                  <br />
                  <ul>
                    <li>
                      DPS 시뮬레이션 자료 출처:{" "}
                      <a
                        className={this.props.classes.link}
                        href="https://discord.gg/rkDkxQW"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <Chip
                          color="secondary"
                          icon={<LaunchIcon />}
                          label="Allagan Studies"
                          onClick={() => {}}
                          size="small"
                          variant="outlined"
                        />
                      </a>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <Grid item>
            <Toolbar>
              <Typography variant="h6">5.2 BiS</Typography>
            </Toolbar>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>기본 글쿨</TableCell>
                    <TableCell>사풍 글쿨</TableCell>
                    <TableCell>기술 로테이션 글쿨 수</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets
                    .filter((gearSet) => gearSet.type === "5.2bis")
                    .map((gearSet, gearSetIndex) => {
                      return (
                        <TableRow
                          className={this.props.classes.link}
                          hover
                          key={gearSetIndex}
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              openedDialog: gearSet.index,
                            });
                          }}
                        >
                          <Hidden mdDown>
                            <TableCell>{gearSet.description}</TableCell>
                          </Hidden>
                          <TableCell>{gearSet.dps}</TableCell>
                          <TableCell>{gearSet.gcd} 초</TableCell>
                          <TableCell>{gearSet.shifuGcd} 초</TableCell>
                          <TableCell>{gearSet.rotation} 글쿨</TableCell>
                          <TableCell>
                            {BisItems[gearSet.foodId]
                              ? BisItems[gearSet.foodId].name
                              : gearSet.foodId}
                          </TableCell>
                          <TableCell>{gearSet.dh} %</TableCell>
                          <TableCell>{gearSet.ch} %</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>
            <Toolbar>
              <Typography variant="h6">절 알렉산더 BiS</Typography>
            </Toolbar>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <Hidden mdDown>
                      <TableCell />
                    </Hidden>
                    <TableCell>평균 DPS</TableCell>
                    <TableCell>기본 글쿨</TableCell>
                    <TableCell>사풍 글쿨</TableCell>
                    <TableCell>기술 로테이션 글쿨 수</TableCell>
                    <TableCell>음식</TableCell>
                    <TableCell>직격 확률</TableCell>
                    <TableCell>극대 확률</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {gearSets
                    .filter((gearSet) => gearSet.type === "ultimate")
                    .map((gearSet, gearSetIndex) => {
                      return (
                        <TableRow
                          className={this.props.classes.link}
                          hover
                          key={gearSetIndex}
                          onClick={() => {
                            this.setState({
                              ...this.state,
                              openedDialog: gearSet.index,
                            });
                          }}
                        >
                          <Hidden mdDown>
                            <TableCell>{gearSet.description}</TableCell>
                          </Hidden>
                          <TableCell>{gearSet.dps}</TableCell>
                          <TableCell>{gearSet.gcd} 초</TableCell>
                          <TableCell>{gearSet.shifuGcd} 초</TableCell>
                          <TableCell>{gearSet.rotation} 글쿨</TableCell>
                          <TableCell>
                            {BisItems[gearSet.foodId]
                              ? BisItems[gearSet.foodId].name
                              : gearSet.foodId}
                          </TableCell>
                          <TableCell>{gearSet.dh} %</TableCell>
                          <TableCell>{gearSet.ch} %</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
          <Grid item>{this.generateFooter()}</Grid>
        </Grid>
        {gearSets.map((gearSet, gearSetIndex) => {
          return (
            <Dialog
              fullWidth
              key={gearSetIndex}
              maxWidth="lg"
              onClose={() => {
                this.setState({
                  ...this.state,
                  openedDialog: -1,
                });
              }}
              open={this.state.openedDialog === gearSet.index}
              scroll="paper"
              TransitionComponent={transition}
            >
              <AppBar position="static">
                <Toolbar variant="dense">
                  <div className={this.props.classes.grow}>
                    <Typography variant="body1">
                      {gearSet.description}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => {
                      this.setState({
                        ...this.state,
                        openedDialog: -1,
                      });
                    }}
                  >
                    <CloseIcon />
                  </IconButton>
                </Toolbar>
              </AppBar>
              <DialogContent>
                <Grid container direction="column" spacing={5}>
                  <Grid item />
                  <Grid item>
                    <li>{gearSet.dialog.intro}</li>
                  </Grid>
                  <Grid item>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">힘</TableCell>
                            <TableCell align="center">극대</TableCell>
                            <TableCell align="center">직격</TableCell>
                            <TableCell align="center">의지</TableCell>
                            <TableCell align="center">기시</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell align="center">
                              {gearSet.attributes.main}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.ch}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.dh}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.det}
                            </TableCell>
                            <TableCell align="center">
                              {gearSet.attributes.sks}
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                  <Grid item>
                    <TableContainer>
                      <Table size="small">
                        <TableHead>
                          <TableRow>
                            <TableCell colSpan={2} />
                            <TableCell align="center">종류</TableCell>
                            <TableCell align="center">이름</TableCell>
                            <TableCell align="center">마테리아</TableCell>
                            <TableCell align="center">필요 재화</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>음식</TableCell>
                            <TableCell>
                              {BisItems[gearSet.foodId] && (
                                <Avatar
                                  alt=""
                                  src={BisItems[gearSet.foodId].iconSrc}
                                  variant="square"
                                />
                              )}
                            </TableCell>
                            <TableCell>제작</TableCell>
                            <TableCell>
                              {BisItems[gearSet.foodId]
                                ? BisItems[gearSet.foodId].name
                                : gearSet.foodId}
                            </TableCell>
                            <TableCell colSpan={3} />
                          </TableRow>
                          {gearSet.dialog.gears.map((gear, gearId) => {
                            const item = BisItems[gear.itemId];

                            if (!item) {
                              return <div key={gearId}>{gear.itemId}</div>;
                            }

                            return (
                              <TableRow
                                key={gearId}
                                selected={
                                  item.from === "영웅 레이드" ||
                                  item.from === "극만신" ||
                                  item.from === "일반 레이드"
                                }
                              >
                                <TableCell>{item.type}</TableCell>
                                <TableCell>
                                  <Avatar
                                    alt=""
                                    src={item.iconSrc}
                                    variant="square"
                                  />
                                </TableCell>
                                <TableCell>{item.from}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                {gear.materiaIds.length > 0 ? (
                                  <TableCell>
                                    <Grid container direction="row" spacing={1}>
                                      {gear.materiaIds.map(
                                        (materiaId, materiaIdIndex) => {
                                          if (!BisItems[materiaId]) {
                                            return (
                                              <div key={materiaIdIndex}>
                                                {materiaId}
                                              </div>
                                            );
                                          }

                                          if (
                                            materiaIdIndex >=
                                            item.materiaSlots +
                                              item.overmeldSlots
                                          ) {
                                            return (
                                              <div key={materiaIdIndex}>
                                                {gear.itemId}
                                              </div>
                                            );
                                          }

                                          return (
                                            <Grid item key={materiaIdIndex}>
                                              <Tooltip
                                                title={BisItems[materiaId].name}
                                              >
                                                <Chip
                                                  avatar={
                                                    <Avatar
                                                      alt=""
                                                      src={
                                                        "/icons/materia-slots/" +
                                                        (materiaIdIndex <
                                                        item.materiaSlots
                                                          ? "blue"
                                                          : "red") +
                                                        BisItems[materiaId]
                                                          .materiaNumber +
                                                        ".png"
                                                      }
                                                    />
                                                  }
                                                  label={
                                                    BisItems[materiaId]
                                                      .shortName
                                                  }
                                                  size="small"
                                                  variant="outlined"
                                                />
                                              </Tooltip>
                                            </Grid>
                                          );
                                        }
                                      )}
                                    </Grid>
                                  </TableCell>
                                ) : (
                                  <TableCell />
                                )}
                                <TableCell>
                                  {item.required
                                    .split("\n")
                                    .map((str, strIndex) => {
                                      return (
                                        <p
                                          className={
                                            this.props.classes.noMargin
                                          }
                                          key={strIndex}
                                        >
                                          {str}
                                        </p>
                                      );
                                    })}
                                </TableCell>
                              </TableRow>
                            );
                          })}
                        </TableBody>
                      </Table>
                    </TableContainer>
                  </Grid>
                </Grid>
              </DialogContent>
            </Dialog>
          );
        })}
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(withRouter(Sam));

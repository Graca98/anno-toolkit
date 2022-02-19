import { Grid } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import MuiLink from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Trans from "next-translate/Trans";
import useTranslation from "next-translate/useTranslation";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { expeditionThreats, itemTypes } from "../anno-config";
import Page from "../components/Page";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
  gridItem: {
    display: "flex",
  },
  card: {
    width: "100%",
    textAlign: "center",
  },
  cardActionArea: {
    height: "100%",
  },
  grayscale: {
    filter: "saturate(2) brightness(0.7)",
  },
}));

const Index = () => {
  const classes = useStyles();
  const { t } = useTranslation("common");

  return (
    <Page headline={t("title.index")}>
      <Container maxWidth="md" className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography align="justify">{t("index.intro")}</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4">{t("heading.items")}</Typography>
            <Grid container spacing={3}>
              {itemTypes
                .filter((itemType) => !itemType.hidden)
                .map((itemType) => (
                  <Grid
                    key={itemType.key}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    className={classes.gridItem}
                  >
                    <Card className={classes.card}>
                      <Link href={`/items/${itemType.key}`}>
                        <CardActionArea
                          className={classes.cardActionArea}
                          disabled={itemType.hidden}
                        >
                          <CardContent>
                            <Image
                              src={`/img/main/3dicons/${itemType.icon}.png`}
                              width={75}
                              height={75}
                              priority={true}
                              loading="eager"
                            />
                            <Typography variant="h5">
                              {t("itemTypes." + itemType.key)}
                            </Typography>
                            {itemType.hidden ? (
                              <Typography>{t("comingSoon")}</Typography>
                            ) : null}
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4">{t("heading.expedition")}</Typography>
            <Grid container spacing={3}>
              {expeditionThreats
                .filter((threat) => threat.icon)
                .map((threat) => (
                  <Grid
                    key={threat.key}
                    item
                    xs={12}
                    sm={6}
                    md={3}
                    className={classes.gridItem}
                  >
                    <Card className={classes.card}>
                      <Link href={`/expedition/${threat.key}`}>
                        <CardActionArea className={classes.cardActionArea}>
                          <CardContent>
                            <Image
                              src={`/img/main/icons/${threat.icon}_0.png`}
                              width={75}
                              height={75}
                              priority={true}
                              loading="eager"
                              className={classes.grayscale}
                            />
                            <Typography variant="h5">
                              {t("expeditionThreats." + threat.key)}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Link>
                    </Card>
                  </Grid>
                ))}
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4">About</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography align="justify">
              <Trans
                i18nKey="common:index.about"
                components={[
                  <MuiLink
                    href="https://github.com/jansepke/anno-toolkit/issues"
                    target="_blank"
                    rel="noopener"
                  />,
                  <MuiLink
                    href="https://github.com/jansepke/anno-toolkit/blob/main/LICENSE"
                    target="_blank"
                    rel="noopener"
                  />,
                ]}
              />
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Index;

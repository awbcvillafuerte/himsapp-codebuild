import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Button } from '@material-ui/core';
import { Link } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom'
// import classNames from 'classnames';

const useStyles = makeStyles({
	grayBg: {
		backgroundColor: '#F5F7FB',
		padding: '25px 24px'
	},
	mainContainer: {
		padding: '25px 24px'
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: 700,
		color: '#272e4c',
	},
	subSectionTitle: {
		fontSize: 14,
		fontWeight: 400,
		color: '#272e4c',
	},
	editBtn: {
		width: '135px',
		fontSize: '14px',
		color: '#fff',
	},
	alignRight: {
		textAlign: 'right',
	},
	menuList: {
		display: "inline-block",
		padding: "10px 45px 10px 0"
	},
	menuLink: {
		color: "#929292",
		display: "block",
		fontSize: "1.10em",
		'&:hover': {
			color: "#3ab77d",
		}
	},
	LinkActive: {
		color: "#3ab77d",
		fontWeight: "bold",
		textDecoration: "underline"
	}
});


interface SubHeaderProps {
	headingTitle: string;
	breadCrumbsArray: any[],
	buttonName?: string,
	layoutType?: string,
	menuItemsArray?: any,
	enableButton?: boolean
	buttonFunc?: () => void,
	activeItems?: (item: any) => void,

}

export const SubHeader: React.FC<SubHeaderProps> = (
	props: SubHeaderProps,
): JSX.Element | null => {
	const {
		buttonName,
		headingTitle,
		breadCrumbsArray,
		buttonFunc,
		layoutType,
		menuItemsArray,
		activeItems,
		enableButton
	} = props
	const classes = useStyles();
	const [activeClass, setActiveClass] = React.useState(0);


	const menulinkClick = (itemName: any, index: any) => {
		activeItems !== undefined && activeItems(itemName)
		setActiveClass(index)
	}




	return (
		<>
			<div className={layoutType === 'layout_1' ? classes.mainContainer : classes.grayBg}>
				<Grid container xs={12} alignItems={'center'} >
					<Grid item xs={6}>
						{
							layoutType === 'layout_1' &&
							<Typography gutterBottom className={classes.subSectionTitle}>
								{
									breadCrumbsArray && breadCrumbsArray.length > 0 && breadCrumbsArray.map((crumbs, i) => (
										breadCrumbsArray.length === i + 1 ? <b>{crumbs.name ? crumbs.name : crumbs}</b> : <><RouteLink to={`${crumbs.link ? crumbs.link : ''}`} style={{ color: '#272E4C', textDecoration: 'none' }}>{crumbs.name ? crumbs.name : crumbs}</RouteLink> / </>
									))
								}
							</Typography>
						}
						<Typography gutterBottom className={classes.sectionTitle}>
							{headingTitle}
						</Typography>
						{
							layoutType === 'layout_2' &&
							<ul style={{ padding: '0', margin: '0' }}>
								{
									menuItemsArray.length > 0 && menuItemsArray.map((item: any, i: any) => (
										<li className={classes.menuList}>
											<Link className={`${classes.menuLink} ${activeClass === i ? classes.LinkActive : ''}`} onClick={() => menulinkClick(item.name, i)}>{item.name}</Link>
										</li>
									))
								}
							</ul>
						}
					</Grid>
					<Grid item xs={6} className={classes.alignRight}>
						{enableButton ?
							<Button
								id="button-id"
								variant="contained"
								color="primary"
								className={classes.editBtn}
								onClick={() => {
									buttonFunc !== undefined && buttonFunc()
								}}>
								{buttonName}
							</Button> : ''}
					</Grid>
				</Grid>
			</div>
		</>
	)
}
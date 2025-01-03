import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation()
	return (
		<nav className={classNames(classes.navbar, {}, [className])}>
			<div className={classes.links}>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
					{t('Main page')}
				</AppLink>
				<AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
					{t('About us')}
				</AppLink>
			</div>
		</nav>
	)
}

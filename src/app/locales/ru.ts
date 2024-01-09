import {
  TermsTextModel,
  PrivacyPolicyTextModel,
  SignUpTextModel,
  CharacterPageTextModel,
  NavigationTextModel,
  LinkExpiredModel,
  LinkConfirmationModel,
  NewPasswordModel,
  ForgotPasswordModel,
  SignInTextModel,
  NewPasswordConfirmationRedirectionModel,
  SidebarMenuModel,
  PaginationTextModel,
  Calendar,
  GeneralSettingsModel,
  NavigationTabsModel,
  ConfirmationModal,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.ru
const characterPage = CharacterPageTextModel.ru
const newPasswordPage = NewPasswordModel.ru
const forgotPasswordPage = ForgotPasswordModel.ru
const linkExpiredPage = LinkExpiredModel.ru
const linkConfirmedPage = LinkConfirmationModel.ru
const descriptionTerms = TermsTextModel.ru
const descriptionPrivacy = PrivacyPolicyTextModel.ru
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.ru
const signUp = SignUpTextModel.ru
const signIn = SignInTextModel.ru
const sidebarMenu = SidebarMenuModel.ru
const pagination = PaginationTextModel.ru
const calendar = Calendar.ru
const generalSettings = GeneralSettingsModel.ru
const navigationTabs = NavigationTabsModel.ru
const confirmationModal = ConfirmationModal.ru

export const ru = {
  calendar: {
    month: calendar.month,
    locale: calendar.localeMonth,
  },
  navigation: {
    title: navigation.title,
    menu: navigation.links,
    header: navigation.language,
  },
  termsDescription: {
    title: descriptionTerms.title,
    description: descriptionTerms.description,
    header: descriptionTerms.language,
  },
  privacyDescription: {
    title: descriptionPrivacy.title,
    description: descriptionPrivacy.description,
  },
  characterPage: characterPage,
  newPasswordPage: newPasswordPage,
  forgotPasswordPage: forgotPasswordPage,
  linkExpiredPage: linkExpiredPage,
  linkConfirmedPage: linkConfirmedPage,
  newPasswordConfirmationRedirectionPage: newPasswordConfirmationRedirectionPage,
  authPages: {
    signUpPage: {
      signUpForm: {
        ...signUp,
      },
    },
    signInPage: {
      signInForm: {
        ...signIn,
      },
    },
  },
  sidebarMenu: sidebarMenu,
  pagination: pagination,
  profileSettings: {
    navigation: navigationTabs,
    generalSettings,
  },
  confirmationModal: confirmationModal,
}
export type LocaleType = typeof ru

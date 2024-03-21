import { LocaleType } from '@/app/locales/ru'
import {
  AccountModel,
  Calendar,
  CharacterPageTextModel,
  ConfirmationModal,
  CreatePost,
  ForgotPasswordModel,
  GeneralSettingsModel,
  LinkConfirmationModel,
  LinkExpiredModel,
  NavigationTabsModel,
  NavigationTextModel,
  NewPasswordConfirmationRedirectionModel,
  NewPasswordModel,
  PaginationTextModel,
  PaymentsModal,
  PrivacyPolicyTextModel,
  SidebarMenuModel,
  SignInTextModel,
  SignUpTextModel,
  TermsTextModel,
} from '@/app/locales/text-models'

const navigation = NavigationTextModel.en
const characterPage = CharacterPageTextModel.en
const newPasswordPage = NewPasswordModel.en
const forgotPasswordPage = ForgotPasswordModel.en
const linkExpiredPage = LinkExpiredModel.en
const linkConfirmedPage = LinkConfirmationModel.en
const descriptionTerms = TermsTextModel.en
const descriptionPrivacy = PrivacyPolicyTextModel.en
const newPasswordConfirmationRedirectionPage = NewPasswordConfirmationRedirectionModel.en
const signUp = SignUpTextModel.en
const signIn = SignInTextModel.en
const sidebarMenu = SidebarMenuModel.en
const pagination = PaginationTextModel.en
const calendar = Calendar.en
const generalSettings = GeneralSettingsModel.en
const navigationTabs = NavigationTabsModel.en
const confirmationModal = ConfirmationModal.en
const createPost = CreatePost.en
const account = AccountModel.en
const paymentsModal = PaymentsModal.en

export const en: LocaleType = {
  account: account,
  authPages: {
    signInPage: {
      signInForm: {
        ...signIn,
      },
    },
    signUpPage: {
      signUpForm: {
        ...signUp,
      },
    },
  },
  calendar: {
    locale: calendar.localeMonth,
    month: calendar.month,
  },
  characterPage: characterPage,
  confirmationModal: confirmationModal,
  createPost: createPost,
  forgotPasswordPage: forgotPasswordPage,
  linkConfirmedPage: linkConfirmedPage,
  linkExpiredPage: linkExpiredPage,
  navigation: {
    header: navigation.language,
    menu: navigation.links,
    title: navigation.title,
  },
  newPasswordConfirmationRedirectionPage: newPasswordConfirmationRedirectionPage,
  newPasswordPage: newPasswordPage,
  pagination: pagination,
  paymentsModal: paymentsModal,
  privacyDescription: {
    description: descriptionPrivacy.description,
    title: descriptionPrivacy.title,
  },
  profileSettings: {
    generalSettings,
    navigation: navigationTabs,
  },
  sidebarMenu: sidebarMenu,
  termsDescription: {
    description: descriptionTerms.description,
    header: descriptionTerms.language,
    title: descriptionTerms.title,
  },
}

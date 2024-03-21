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
const createPost = CreatePost.ru
const account = AccountModel.ru
const paymentsModal = PaymentsModal.ru

export const ru = {
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
export type LocaleType = typeof ru

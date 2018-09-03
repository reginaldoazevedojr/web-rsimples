import { AuthServiceConfig, FacebookLoginProvider, GoogleLoginProvider } from 'angularx-social-login';

/**
 * @returns {AuthServiceConfig}
 */
export function getAuthServiceConfigs() {

  /**
   * @type {AuthServiceConfig}
   */
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('961540546117-6pk02cbbhfdgnudn6lif5ck1kmhafpea.apps.googleusercontent.com')
      },
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('1310020702529451')
      }
    ]
    )
  ;

  return config;
}

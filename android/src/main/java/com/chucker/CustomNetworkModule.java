package com.chucker;

import android.content.Context;

import com.chuckerteam.chucker.api.ChuckerInterceptor;
import com.facebook.react.modules.network.OkHttpClientFactory;
import com.facebook.react.modules.network.ReactCookieJarContainer;

import okhttp3.OkHttpClient;

public class CustomNetworkModule implements OkHttpClientFactory {
  private Context context;

  public CustomNetworkModule(Context context) {
    this.context = context;
  }

  public OkHttpClient createNewNetworkModuleClient() {
    OkHttpClient client = new OkHttpClient.Builder()
      .addInterceptor(new ChuckerInterceptor.Builder(context).build())
      .cookieJar(new ReactCookieJarContainer())
      .build();

    return client;
  }
}
